package com.dto;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Entity
public class ServiceImage {
	@Id
	private int imageId;
	private String imgName;
	
	@ManyToOne
	@JoinColumn(name="serviceId")
	private Service service;

	public ServiceImage() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ServiceImage(int imageId, String imgName, Service service) {
		super();
		this.imageId = imageId;
		this.imgName = imgName;
		this.service = service;
	}

	public int getImageId() {
		return imageId;
	}

	public void setImageId(int imageId) {
		this.imageId = imageId;
	}

	public String getImgName() {
		return imgName;
	}

	public void setImgName(String imgName) {
		this.imgName = imgName;
	}

	public Service getService() {
		return service;
	}

	public void setService(Service service) {
		this.service = service;
	}
	
	
}
