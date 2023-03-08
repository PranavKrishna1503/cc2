package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin

public class Controller {

@Autowired
	Emprepo serviceRepository;
@Autowired
	EmpService service;

@GetMapping("/")
public String Wel()
{
	return "WELCOME";
}


	@GetMapping("/get")
	public List<Employee> get()
	{
		return service.getal();
	}
	@PostMapping("/post") 
	public Employee posting(@RequestBody Employee to) {
		return service.postingval(to);
	}
	@DeleteMapping("/delete")
	public String delete(@RequestParam int id) {
		return service.deleted(id);
	}
	@PutMapping("/put")
	public String put(@RequestBody Employee id)
	{
		return service.Putting(id);
	}

	
}