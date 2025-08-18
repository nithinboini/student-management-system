// src/components/EditStudent.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StudentService from './StudentService';

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({ id: '', name: '', email: '', course: '', enrollmentDate: '' });

  useEffect(() => {
    StudentService.getStudentById(id).then((res) => {
      setStudent(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const updateStudent = (e) => {
    e.preventDefault();
    StudentService.updateStudent(student).then(() => navigate('/'));
  };

  return (
    <div className="container mt-3">
      <h2>Edit Student</h2>
      <form onSubmit={updateStudent}>
        {["id", "name", "email", "course", "enrollmentDate"].map((field) => (
          <div className="mb-3" key={field}>
            <label className="form-label">{field}</label>
            <input type="text" className="form-control" name={field} value={student[field]} onChange={handleChange} required />
          </div>
        ))}
        <button className="btn btn-success">Update</button>
      </form>
    </div>
  );
};

export default EditStudent;
