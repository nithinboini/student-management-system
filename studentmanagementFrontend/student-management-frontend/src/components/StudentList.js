// src/components/StudentList.js
import React, { useEffect, useState } from 'react';
import StudentService from './StudentService';
import { useNavigate } from 'react-router-dom';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    StudentService.getAllStudents().then((res) => {
      setStudents(res.data);
    });
  }, []);

  const deleteStudent = (id) => {
    StudentService.deleteStudent(id).then(() => {
      setStudents(students.filter((student) => student.id !== id));
    });
  };

  return (
    <div className="container mt-3">
      <h2>Students</h2>
      <button className="btn btn-primary mb-3" onClick={() => navigate('/add')}>Add Student</button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Course</th><th>Enrollment Date</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td><td>{student.name}</td><td>{student.email}</td><td>{student.course}</td><td>{student.enrollmentDate}</td>
              <td>
                <button onClick={() => navigate(`/edit/${student.id}`)} className="btn btn-warning me-2">Edit</button>
                <button onClick={() => deleteStudent(student.id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
