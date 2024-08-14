import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getStudent, updateStudent } from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditStudent() {
const { id } = useParams();
const [message, setMessage] = useState('');
const [student, setStudent] = useState({
	id: '',
	firstName: '',
	lastName: '',
	dob: '',
	grade: '',
	address: '',
	contactNumber: '',
	email: ''
});

useEffect(() => {
getStudent(id).then(response => {
setStudent(response.data);
}).catch(error => {
console.error('There was an error fetching the student data!', error);
});
}, [id]);

const handleChange = (e) => {
const { name, value } = e.target;
setStudent({
...student,
[name]: value,
});
};

const handleSubmit = (e) => {
e.preventDefault();
updateStudent(id, student).then(response => {
console.log('Student updated:', response.data);
setMessage('Student updated successfully!');
// Add logic to handle the response, e.g., redirect or show a success message
}).catch(error => {
console.error('There was an error updating the student!', error);
});
};

return (
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label>First Name::</label>
      <input type="text" className="form-control" name="firstName" value={student.firstName} onChange={handleChange} required />
    </div>
    <div className="form-group">
          <label>Last Name:</label>
          <input type="text" className="form-control" name="lastName" value={student.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" className="form-control" name="dob" value={student.dob} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Grade:</label>
          <input type="text" className="form-control" name="grade" value={student.grade} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" className="form-control" name="address" value={student.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input type="text" className="form-control" name="contactNumber" value={student.contactNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" name="email" value={student.email} onChange={handleChange} required />
        </div>
  <button type="submit" className="btn btn-primary mt-3">Update Student</button>
  {message && <p className="mt-3">{message}</p>}
  </form>
  );
}

export default EditStudent;
