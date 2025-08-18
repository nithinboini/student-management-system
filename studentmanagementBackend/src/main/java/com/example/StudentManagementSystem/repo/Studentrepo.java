package com.example.StudentManagementSystem.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.StudentManagementSystem.entity.Student;

@Repository
public interface Studentrepo extends JpaRepository<Student, Integer> {
	
	

}
