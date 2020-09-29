package com.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Entity
public class Reviews {
	@Id@GeneratedValue
	private int reviewId;
	private String review;
	private double rating;
	
	@ManyToOne
	@JoinColumn(name="serviceId")
	private Service service;
	
	@ManyToOne
	@JoinColumn(name="custId")
	private Customer customer;
	
	public Reviews() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Reviews(int reviewId,String review, double rating,Service service,Customer customer) {
		super();
		this.reviewId = reviewId;
		this.review = review;
		this.rating = rating;
		this.service = service;
		this.customer = customer;
	}
	public String getReview() {
		return review;
	}
	public void setReview(String review) {
		this.review = review;
	}
	public double getRating() {
		return rating;
	}
	public void setRating(double rating) {
		this.rating = rating;
	}
	public Service getService() {
		return service;
	}
	public void setService(Service service) {
		this.service = service;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public int getReviewId() {
		return reviewId;
	}
	public void setReviewId(int reviewId) {
		this.reviewId = reviewId;
	}
	
	
	
}
