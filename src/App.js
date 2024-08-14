import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';  // Import Footer
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';
import SearchStudent from './pages/SearchStudent';  // Import SearchStudent
import DeleteStudent from './pages/DeleteStudent';
import './assets/styles/App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />  {/* Include Header component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
          <Route path="/search-student" element={<SearchStudent />} />  {/* Add route for SearchStudent */}
          <Route path="/delete-student/:id" element={<DeleteStudent />} />
        </Routes>
      </Router>
        <Footer />
    </div>
  );
}

export default App;
