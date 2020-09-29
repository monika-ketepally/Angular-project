package com.dao;

import java.util.List;

import org.hibernate.SessionFactory;

import com.dto.Book;
import com.dto.Customer;
import com.dto.Service;
import com.db.HibernateTemplate;

public class CustomerDAO {

	private SessionFactory factory = null;
	public int register(Customer customer) { 
		return HibernateTemplate.addObject(customer);
	}
	
	public Customer getCustByUserPass(String loginId,String password) {
		return (Customer)HibernateTemplate.getObjectByUserPass(loginId,password);
	}

	public Customer getCustByEmail(String email) {
		// TODO Auto-generated method stub
		return (Customer)HibernateTemplate.getObjectByEmail(email);
	}

	public void update(Customer customer) {
		// TODO Auto-generated method stub
		HibernateTemplate.updateObject(customer);
	}

	public List<Book> getCustomerByCustomer(int custId) {
		// TODO Auto-generated method stub
		return HibernateTemplate.getBookingListById(custId);
	}

	public Object getServiceByMob(String mobile) {
		return (Customer)HibernateTemplate.getObByMob(mobile);

	}
}
