package com.example.StudentManagementSystem.services;
import java.util.*;

import com.example.StudentManagementSystem.entity.Student;

public interface StudentServices {
	
	public List<Student>getAllStudents();
	
	public Optional<Student>getStdById(int id);
	
	public Student save(Student std);
	
	public void DeleteByEmpId(int id);

}
