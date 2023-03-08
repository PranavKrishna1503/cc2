package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestParam;

@Service
public class EmpService {
	@Autowired
	Emprepo repository;
	public List<Employee> getal()
	{
		return repository.findAll();
	}
	public Employee postingval(@RequestBody Employee val) {
		return repository.save(val);
	}
	public String deleted(int id)
	{
		repository.deleteById(id);
		return "deleted";
	}
	public String Putting(@RequestBody Employee id)
	{
		repository.save(id);
		return "Updated";
	}


}