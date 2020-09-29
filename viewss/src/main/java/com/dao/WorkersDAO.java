package com.dao;

import java.util.List;

import com.db.HibernateTemplate;
import com.dto.Reviews;
import com.dto.Service;
import com.dto.Workers;

public class WorkersDAO {

	public int register(Workers workers) {		
		return HibernateTemplate.addObject(workers);
	}
	
	public List<Workers> getWorkersByService(int serviceId) {	
		Service service;
		return (List)HibernateTemplate.getObjectListofW(serviceId);
	}

	public void update(Workers worker) {
		// TODO Auto-generated method stub
		HibernateTemplate.updateObject(worker);
	}

	public void delete(int workerId) {
		// TODO Auto-generated method stub
		HibernateTemplate.delete(workerId);
		
	}
	
	
}
