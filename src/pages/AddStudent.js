import React, { useState } from 'react';
import { addStudent } from '../services/api'; // Import the addStudent function

function AddStudent() {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    grade: '',
    address: '',
    contactNumber: '',
    email: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addStudent(student); // Use the addStudent function from the api.js file
      setMessage('Student added successfully!');
      setStudent({
        firstName: '',
        lastName: '',
        dob: '',
        grade: '',
        address: '',
        contactNumber: '',
        email: ''
      });
    } catch (error) {
      console.error('There was an error adding the student!', error);
      setMessage('Error adding student!');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
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
        <button type="submit" className="btn btn-primary mt-3">Add Student</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}

export default AddStudent;

