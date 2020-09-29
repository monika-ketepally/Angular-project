package com.dto;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.xml.bind.annotation.XmlRootElement;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.dto.Service;
import com.fasterxml.jackson.annotation.JsonIgnore;

@XmlRootElement
@Entity
public class Workers {
	@Id@GeneratedValue
	private int workerId;
	private String workerName;
	private String designation;
	private String aarogyasetustatus;
	private double temperature;
	private String mobile;
	private int rating;
	private int people;
	private String gender;
	@ManyToOne
	@JoinColumn(name="serviceId")
	private Service service;
	@JsonIgnore
	@OneToMany(mappedBy="worker")
	private List<Book> bookList =new ArrayList<Book>();
	
	
	public Workers(int workerId, String workerName, String designation, String aarogyasetustatus, double temperature,
			String mobile, int rating, int people, String gender, Service service, List<Book> bookList) {
		super();
		this.workerId = workerId;
		this.workerName = workerName;
		this.designation = designation;
		this.aarogyasetustatus = aarogyasetustatus;
		this.temperature = temperature;
		this.mobile = mobile;
		this.rating = rating;
		this.people = people;
		this.gender = gender;
		this.service = service;
		this.bookList = bookList;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Workers() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public int getPeople() {
		return people;
	}

	public void setPeople(int people) {
		this.people = people;
	}

	public int getWorkerId() {
		return workerId;
	}
	public void setWorkerId(int workerId) {
		this.workerId = workerId;
	}
	public String getWorkerName() {
		return workerName;
	}
	public void setWorkerName(String workerName) {
		this.workerName = workerName;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public String getAarogyasetustatus() {
		return aarogyasetustatus;
	}
	public void setAarogyasetustatus(String aarogyasetustatus) {
		this.aarogyasetustatus = aarogyasetustatus;
	}
	public double getTemperature() {
		return temperature;
	}
	public void setTemperature(double temperature) {
		this.temperature = temperature;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public Service getService() {
		return service;
	}
	public void setService(Service service) {
		this.service = service;
	}
	public List<Book> getBookList() {
		return bookList;
	}
	public void setBookList(List<Book> bookList) {
		this.bookList = bookList;
	}
	
	
}
