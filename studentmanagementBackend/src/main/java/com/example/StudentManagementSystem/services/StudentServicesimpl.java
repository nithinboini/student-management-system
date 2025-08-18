package com.example.StudentManagementSystem.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.StudentManagementSystem.entity.Student;
import com.example.StudentManagementSystem.repo.Studentrepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class StudentServicesimpl implements StudentServices {
	
	@Autowired
	private Studentrepo studentrepo;

	@Override
	public List<Student> getAllStudents() {
		// TODO Auto-generated method stub
		
		return studentrepo.findAll();
	}

	@Override
	public Optional<Student> getStdById(int id) {
		// TODO Auto-generated method stub
		return studentrepo.findById(id);
	}

	@Override
	public Student save(Student std) {
		// TODO Auto-generated method stub
		
		return studentrepo.save(std);
	}

	@Override
	public void DeleteByEmpId(int id) {
		// TODO Auto-generated method stub
		studentrepo.deleteById(id);
		
	}



}
