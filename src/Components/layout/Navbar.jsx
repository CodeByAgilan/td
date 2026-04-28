import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
           Expense Tracker
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
               Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/calendar"
              className={`nav-link ${isActive('/calendar') ? 'active' : ''}`}
            >
               Calendar
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/analytics"
              className={`nav-link ${isActive('/analytics') ? 'active' : ''}`}
            >
               Analytics
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
