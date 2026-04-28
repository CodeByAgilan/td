import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-content">
        <h1 className="app-title">Expense Tracker</h1>
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/calendar" 
              className={location.pathname === '/calendar' ? 'nav-link active' : 'nav-link'}
            >
              Calendar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
