package com.dto;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.xml.bind.annotation.XmlRootElement;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonIgnore;

@XmlRootElement
@Entity
@Table(
		   name = "customer", 
		   uniqueConstraints = {@UniqueConstraint(columnNames = "mobile")}
		)
public class Customer {
	@Id@GeneratedValue
	private int custId;
	private String custName;
	private String email;
	private String password;
	private String mobile;
	private String address;
	private int pincode;
	private String gender;
	private String city;
	private int ratings;
	private int ppl;
	private String status;
	@JsonIgnore
	@OneToMany(mappedBy="customer",fetch = FetchType.LAZY)
	@Fetch(value = FetchMode.SUBSELECT)
	private List<Book> bookList =new ArrayList<Book>();
	@JsonIgnore
	@OneToMany(mappedBy="customer",fetch = FetchType.LAZY)
	@Fetch(value = FetchMode.SUBSELECT)
	private List<Reviews> reviewsList =new ArrayList<Reviews>();
	
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Customer(int custId, String custName, String email, String password, String mobile, String address,String status,
			int pincode, String gender, String city, List<Book> bookList, List<Reviews> reviewsList,int ratings,int ppl) {
		super();
		this.custId = custId;
		this.custName = custName;
		this.email = email;
		this.password = password;
		this.mobile = mobile;
		this.address = address;
		this.pincode = pincode;
		this.gender = gender;
		this.city = city;
		this.bookList = bookList;
		this.reviewsList = reviewsList;
		this.ppl  = ppl;
		this.ratings = ratings;
		this.status = status;
		
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getRatings() {
		return ratings;
	}

	public void setRatings(int ratings) {
		this.ratings = ratings;
	}

	public int getPpl() {
		return ppl;
	}

	public void setPpl(int ppl) {
		this.ppl = ppl;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getCustId() {
		return custId;
	}
	public void setCustId(int custId) {
		this.custId = custId;
	}
	public String getCustName() {
		return custName;
	}
	public void setCustName(String custName) {
		this.custName = custName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public List<Book> getBookList() {
		return bookList;
	}
	public void setBookList(List<Book> bookList) {
		this.bookList = bookList;
	}
	public List<Reviews> getReviewsList() {
		return reviewsList;
	}
	public void setReviewsList(List<Reviews> reviewsList) {
		this.reviewsList = reviewsList;
	}
	
	
}
