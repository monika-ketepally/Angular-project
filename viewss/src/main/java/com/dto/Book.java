package com.dto;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.xml.bind.annotation.XmlRootElement;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@XmlRootElement
@Entity
public class Book {
	@Id@GeneratedValue
	private int bookingId;
	private String appointmentType;
	@JsonFormat(pattern="yyyy-MM-dd")
	private java.util.Date date;
	private String time;
	private String mobile;
	private double price;
	private String category;
	private int rating;
	private String status;
	public Book(int bookingId, String appointmentType, Date date, String time, String mobile, double price,
			String category, int rating, String status, Service service, Workers worker, List<Services> services,
			Customer customer) {
		super();
		this.bookingId = bookingId;
		this.appointmentType = appointmentType;
		this.date = date;
		this.time = time;
		this.mobile = mobile;
		this.price = price;
		this.category = category;
		this.rating = rating;
		this.status = status;
		this.service = service;
		this.worker = worker;
		this.services = services;
		this.customer = customer;
	}
	@ManyToOne
	@JoinColumn(name="serviceId")
	private Service service;
	
	@ManyToOne
	@JoinColumn(name="workerId")
	private Workers worker;
	
	@JsonIgnore
	@OneToMany(mappedBy = "book",fetch = FetchType.LAZY)
	@Fetch(value = FetchMode.SUBSELECT)
	private List<Services> services = new ArrayList<Services>();
	
	
	
	@ManyToOne
	@JoinColumn(name="custId")
	private Customer customer;
	
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getBookingId() {
		return bookingId;
	}
	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}
	public String getAppointmentType() {
		return appointmentType;
	}
	public void setAppointmentType(String appointmentType) {
		this.appointmentType = appointmentType;
	}
	public java.util.Date getDate() {
		return date;
	}
	
	
	public List<Services> getServices() {
		return services;
	}
	public void setServices(List<Services> services) {
		this.services = services;
	}
	public void setDate(java.util.Date date) {
		this.date = date;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public Service getService() {
		return service;
	}
	public void setService(Service service) {
		this.service = service;
	}
	public Workers getWorker() {
		return worker;
	}
	public void setWorker(Workers worker) {
		this.worker = worker;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	
	
}
