package com.dao;

import java.util.List;

import com.db.HibernateTemplate;
import com.dto.Book;
import com.dto.Service;
import com.dto.Workers;

public class BookDAO {

	public int register(Book book) { 
		return HibernateTemplate.addObject(book);
	}
	
	public List<Book> getbookingById(int custId) {	
		return (List)HibernateTemplate.getObjectListById(Book.class,"custId",custId);
	}
	public List<Book> getBooksByService(int serviceId) {	
		return (List)HibernateTemplate.getObjectListByIddd(serviceId);
	}
	public List<Book> getBooksByWorkerr(int workerId) {	
		return (List)HibernateTemplate.getBookingsByWorker(workerId);
	}
	public void update(Book book) {
		// TODO Auto-generated method stub
		HibernateTemplate.updateObject(book);
	}

	public List<Book> getBooksByWorker(int workerId) {
		// TODO Auto-generated method stub
		return (List)HibernateTemplate.getObjectListBywId(workerId);
	}

	public List<Book> getBooksByDate(int serviceId, java.sql.Date sqldate) {
		// TODO Auto-generated method stub
		return (List)HibernateTemplate.getObjectListByDate(serviceId,sqldate);
	}
}
