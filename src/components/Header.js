import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                to="/"
              >
                Student Info
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/add-student' ? 'active' : ''}`}
                to="/add-student"
              >
                Add Student
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/search-student' ? 'active' : ''}`}
                to="/search-student"
              >
                Search Student
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          transition: color 0.3s ease, background-color 0.3s ease;
        }
        .nav-link:hover {
          color: #0056b3;
          background-color: #e9ecef;
        }
        .nav-link.active {
          color: #ffffff;
          background-color: #007bff;
        }
      `}</style>
    </nav>
  );
}

export default Header;
