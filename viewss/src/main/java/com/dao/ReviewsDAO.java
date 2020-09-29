package com.dao;

import java.util.List;

import com.db.HibernateTemplate;
import com.dto.Reviews;
import com.dto.Service;

public class ReviewsDAO {

	public int register(Reviews reviews) { 
		return HibernateTemplate.addObject(reviews);
	}
	
	public List<Reviews> getReviewsByCat(int serviceId) {	
		Service service = null;
		return (List)HibernateTemplate.getObjectListById(Reviews.class,service,serviceId);
	}
	
	public double getRatingByService(int serviceId) {	
		List<Reviews> reviews =  (List)HibernateTemplate.getObjectListById(Reviews.class,"serviceId",serviceId);
		double avgrat = 0;
		int i = 0;
		for(Reviews x :reviews) {
			i++;
			avgrat = avgrat + x.getRating();
		}
		return (avgrat / i);
	}
	
}
