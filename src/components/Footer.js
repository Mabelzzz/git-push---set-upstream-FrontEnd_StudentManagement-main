import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center p-3 mt-4">
      &copy; {new Date().getFullYear()} Student Management App
    </footer>
  );
}

export default Footer;
