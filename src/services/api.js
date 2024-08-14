import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api'
});

export const addStudent = (studentData) => api.post('/students', studentData);
export const getStudents = () => api.get('/students');
export const getStudent = (id) => api.get(`/students/${id}`);
export const updateStudent = (id, studentData) => api.put(`/students/${id}`, studentData);
export const deleteStudent = (id) => api.delete(`/students/${id}`);

export default api;
