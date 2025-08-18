// src/components/AddStudent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentService from './StudentService';

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    course: '',
    enrollmentDate: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const saveStudent = (e) => {
    e.preventDefault();

    // Ensure enrollmentDate is formatted correctly for a Date field
    const payload = {
      ...student,
      enrollmentDate: new Date(student.enrollmentDate)
    };

    console.log("Submitting student:", payload);

    StudentService.createStudent(payload)
      .then(() => navigate('/'))
      .catch(error => {
        console.error("Error saving student:", error.response?.data || error.message);
        alert("Failed to save student. See console for details.");
      });
  };

  return (
    <div className="container mt-3">
      <h2>Add Student</h2>
      <form onSubmit={saveStudent}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="name" value={student.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={student.email} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Course</label>
          <input type="text" className="form-control" name="course" value={student.course} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Enrollment Date</label>
          <input
            type="date"
            className="form-control"
            name="enrollmentDate"
            value={student.enrollmentDate}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">Save</button>
      </form>
    </div>
  );
};

export default AddStudent;
