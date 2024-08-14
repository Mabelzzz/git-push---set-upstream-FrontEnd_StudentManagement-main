import React, { useEffect, useState } from 'react';
import { getStudents } from '../services/api';
import StudentList from '../components/StudentList'; // ปรับให้ตรงกับเส้นทางของไฟล์ StudentList

function Home() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllStudents = async () => {
      try {
        const response = await getStudents();
        setStudents(response.data);
      } catch (err) {
        setError('Failed to fetch students.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllStudents();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
      <StudentList students={students}></StudentList>
    </div>
  );
}
export default Home;
