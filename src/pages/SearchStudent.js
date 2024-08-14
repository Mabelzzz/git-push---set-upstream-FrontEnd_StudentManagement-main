import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getStudents,deleteStudent } from '../services/api';  // Import API functions
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchStudent() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    getStudents().then(response => {
      setStudents(response.data);
    }).catch(error => {
      console.error('There was an error fetching the students!', error);
    });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      setMessage('Student deleted successfully!');
      fetchStudents();  // Refresh the student list after deletion
    } catch (error) {
      console.error('There was an error deleting the student!', error);
      setMessage('Error deleting student!');
    }
  };

  const filteredStudents = students.filter(student =>
    student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.id.toString().includes(searchTerm)
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Search Student</h2>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by name or ID"
        value={searchTerm}
        onChange={handleSearch}
      />
      {message && <p className="alert alert-info">{message}</p>}
      <ul className="list-group">
        {filteredStudents.map(student => (
          <li key={student.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{student.firstName} {student.lastName} (ID: {student.id})</span>
            <div>
              <Link to={`/edit-student/${student.id}`} className="btn btn-primary btn-sm mr-2">Edit</Link>
              <button onClick={() => handleDelete(student.id)} className="btn btn-danger btn-sm">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchStudent;
