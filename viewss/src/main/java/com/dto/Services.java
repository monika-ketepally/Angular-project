package com.dto;

import java.util.ArrayList;
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

import com.fasterxml.jackson.annotation.JsonIgnore;

@XmlRootElement
@Entity
public class Services {
	@Id@GeneratedValue
	private int id;
	private String serviceeName;
	private double price;
	
	@ManyToOne
	@JoinColumn(name="serviceId")
	private Service service;
	
	@ManyToOne
	@JoinColumn(name="bookingId")
	private Book book;
	
	
	public Services() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Services(int id, String serviceeName, double price, Service service,Book book) {
		super();
		this.id = id;
		this.serviceeName = serviceeName;
		this.price = price;
		this.service = service;
		this.book = book;
	}

	public Book getBook() {
		return book;
	}

	public void setBook(Book book) {
		this.book = book;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getServiceeName() {
		return serviceeName;
	}

	public void setServiceeName(String serviceeName) {
		this.serviceeName = serviceeName;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Service getService() {
		return service;
	}

	public void setService(Service service) {
		this.service = service;
	}
	
	
}
