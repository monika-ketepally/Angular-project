package com.dao;

import java.util.List;

import com.db.HibernateTemplate;
import com.dto.Service;
import com.dto.Services;
import com.dto.Workers;

public class ServicesDAO {

	public int register(Services services) {		
		return HibernateTemplate.addObject(services);
	}
	
	public List<Services> getServicesByService(int serviceId) {	
		Service service;
		return (List)HibernateTemplate.getObjectListById(Services.class,"service",serviceId);
	}

	public void update(Services services) {
		// TODO Auto-generated method stub
		HibernateTemplate.updateObject(services);
	}
	
	public Services getServiceById(int id) {
		return (Services)HibernateTemplate.getObjectByIdd(id);
	}

	public void delete(int workerId) {
		// TODO Auto-generated method stub
		HibernateTemplate.deletee(workerId);
		
	}
}
