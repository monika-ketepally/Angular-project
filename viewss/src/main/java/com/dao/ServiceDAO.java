package com.dao;


import com.dto.Service;

import java.util.List;

import com.db.HibernateTemplate;

public class ServiceDAO {
	public int register(Service service) {		
		return HibernateTemplate.addObject(service);
	}
	
	public Service getServiceByUserPass(String loginId,String password) {
		return (Service)HibernateTemplate.getServiceByUserPass(loginId,password);
	}
	
	public List<Service> getAllServices() {
		List<Service> services =(List)HibernateTemplate.getObjectListByQuery("From Service");
		System.out.println("Inside All services ..."+services);
		return services;	
	}
	
	public Service getServiceById(int id) {
		return (Service)HibernateTemplate.getObjectById(id);
	}
	
	public List<Service> getServiceByCat(String category) {	
		return (List)HibernateTemplate.getObjectListByName(Service.class,"category",category);
	}
	
	public int uploadLogo(int serviceId,String imageName) {
		Service service = (Service)HibernateTemplate.getObjectById(serviceId);
		System.out.println(service.getServiceName());
		service.setImageName(imageName);
		System.out.println(imageName);
		return HibernateTemplate.updateObject(service);
	}

	public void updateSer(Service ss) {
		// TODO Auto-generated method stub
		HibernateTemplate.updateObject(ss);

	}
	public Service getServiceByMob(String mobile) {
		return (Service)HibernateTemplate.getObjectByMob(mobile);
	}

	public List<Service> getServiceByCity(String category, String city) {
		// TODO Auto-generated method stub
		return (List)HibernateTemplate.getObjectListByCity(category,city);
	}

	public List<Service> getServices() {
	    // TODO Auto-generated method stub
	    return (List)HibernateTemplate.getAllObjectsList(Service.class);
	    }
}
