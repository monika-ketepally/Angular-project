package com.dto;

import java.util.ArrayList;
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

import com.dto.Workers;
import com.fasterxml.jackson.annotation.JsonIgnore;

@XmlRootElement
@Entity
@Table(
		   name = "service", 
		   uniqueConstraints = {@UniqueConstraint(columnNames = "email")}
		)
public class Service {
	@Id@GeneratedValue
	private int serviceId;
	private String serviceName;
	private String email;
	private String password;
	private String mobile;
	private String address;
	private String city;
	private String category;
	private String coupons;
	private double rating;
	private String reviews;
	private String imageName;
	private String secretCode;
	@JsonIgnore
	@OneToMany(mappedBy="service",fetch = FetchType.LAZY)
	@Fetch(value = FetchMode.SUBSELECT)
	private List<Workers> workerList =new ArrayList<Workers>();
	@JsonIgnore
	@OneToMany(mappedBy="service",fetch = FetchType.LAZY)
	@Fetch(value = FetchMode.SUBSELECT)
	private List<Reviews> reviewList = new ArrayList<Reviews>();
	@JsonIgnore
	@OneToMany(mappedBy="service",fetch = FetchType.LAZY)
	@Fetch(value = FetchMode.SUBSELECT)
	private List<Book> bookList =new ArrayList<Book>();
	@JsonIgnore
	@OneToMany(mappedBy="service",fetch = FetchType.LAZY)
	@Fetch(value = FetchMode.SUBSELECT)
	private List<ServiceImage> serviceImage = new ArrayList<ServiceImage>();
	@JsonIgnore
	@OneToMany(mappedBy="service",fetch = FetchType.LAZY)
	@Fetch(value = FetchMode.SUBSELECT)
	private List<Services> services = new ArrayList<Services>();
	
	public Service() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Service(int serviceId, String serviceName, String email, String password, String mobile, String address,String city,String secretCode,
			String category, String coupons, double rating, String reviews,String imageName,List<Workers> workerList,List<Reviews> reviewList,List<Book> bookList,List<ServiceImage> serviceImage,List<Services> services) {
		super();
		this.serviceId = serviceId;
		this.serviceName = serviceName;
		this.email = email;
		this.password = password;
		this.mobile = mobile;
		this.address = address;
		this.category = category;
		this.coupons = coupons;
		this.rating = rating;
		this.reviews = reviews;
		this.workerList = workerList;
		this.reviewList = reviewList;
		this.bookList = bookList;
		this.imageName = imageName;
		this.serviceImage = serviceImage;
		this.services = services;
		this.city = city;
		this.secretCode = secretCode;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public int getServiceId() {
		return serviceId;
	}
	public void setServiceId(int serviceId) {
		this.serviceId = serviceId;
	}
	public String getServiceName() {
		return serviceName;
	}
	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
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
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getCoupons() {
		return coupons;
	}
	public void setCoupons(String coupons) {
		this.coupons = coupons;
	}
	public double getRating() {
		return rating;
	}
	public void setRating(double rating) {
		this.rating = rating;
	}
	public String getReviews() {
		return reviews;
	}
	public void setReviews(String reviews) {
		this.reviews = reviews;
	}
	public List<Workers> getWorkerList() {
		return workerList;
	}
	public void setWorkerList(List<Workers> workerList) {
		this.workerList = workerList;
	}
	public List<Reviews> getReviewList() {
		return reviewList;
	}
	public void setReviewList(List<Reviews> reviewList) {
		this.reviewList = reviewList;
	}
	public List<Book> getBookList() {
		return bookList;
	}
	public void setBookList(List<Book> bookList) {
		this.bookList = bookList;
	}
	public String getImageName() {
		return imageName;
	}
	public void setImageName(String imageName) {
		this.imageName = imageName;
	}
	public List<ServiceImage> getServiceImage() {
		return serviceImage;
	}
	public void setServiceImage(List<ServiceImage> serviceImage) {
		this.serviceImage = serviceImage;
	}
	public List<Services> getServices() {
		return services;
	}
	public void setServices(List<Services> services) {
		this.services = services;
	}
	public String getSecretCode() {
		return secretCode;
	}
	public void setSecretCode() {
		String sc = getAlphaNumericString(10);
		secretCode = sc;
	}
	
	 public static String getAlphaNumericString(int n) 
	    { 
	  
	        // chose a Character random from this String 
	        String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	                                    + "0123456789"
	                                    + "abcdefghijklmnopqrstuvxyz"+"!@#$%^&*()/*-+."; 
	  
	        // create StringBuffer size of AlphaNumericString 
	        StringBuilder sb = new StringBuilder(n); 
	  
	        for (int i = 0; i < n; i++) { 
	  
	            // generate a random number between 
	            // 0 to AlphaNumericString variable length 
	            int index 
	                = (int)(AlphaNumericString.length() 
	                        * Math.random()); 
	  
	            // add Character one by one in end of sb 
	            sb.append(AlphaNumericString 
	                          .charAt(index)); 
	        } 
	  
	        return sb.toString(); 
	    }
	
}
