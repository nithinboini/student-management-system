package com.example.StudentManagementSystem.controller;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.StudentManagementSystem.entity.Student;
import com.example.StudentManagementSystem.services.StudentServices;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class Studentcontroller {
	
	@Autowired
	private StudentServices studentservices;
	
	@GetMapping("/students")
	public List<Student> getAllStudents(){
		return studentservices.getAllStudents();
	}
	
	@GetMapping("/students/{id}")
	public Optional<Student> getStdById(@PathVariable("id")int sid) {
		return studentservices.getStdById(sid);
	}
	
	
	@PostMapping("/students")
	public Student createStd(@RequestBody Student student) {
		return studentservices.save(student);
	}
	
	
	@PutMapping("/students")
	public Student updateStd(@RequestBody Student student) {
		return studentservices.save(student);
	}
	
	@DeleteMapping("students/{id}")
	public String deleteStd(@PathVariable("id")int sid) {
		studentservices.DeleteByEmpId(sid);
		return "student with student id:"+sid+"deleted";
	}

}
