// src/components/StudentService.js
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/students";

class StudentService {
  getAllStudents() {
    return axios.get(BASE_URL);
  }

  getStudentById(id) {
    return axios.get(`${BASE_URL}/${id}`);
  }

  createStudent(student) {
    return axios.post(BASE_URL, student);
  }

  updateStudent(student) {
    return axios.put(BASE_URL, student);
  }

  deleteStudent(id) {
    return axios.delete(`${BASE_URL}/${id}`);
  }
}

export default new StudentService();
