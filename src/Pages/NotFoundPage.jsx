import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1>Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
        
        <div className="suggestions">
          <h3>Here are some helpful links:</h3>
          <div className="link-buttons">
            <Link to="/" className="link-btn home-btn">
              🏠 Back to Dashboard
            </Link>
            <Link to="/calendar" className="link-btn calendar-btn">
              📅 Go to Calendar
            </Link>
            <Link to="/analytics" className="link-btn analytics-btn">
              📈 View Analytics
            </Link>
          </div>
        </div>

        <div className="error-illustration">
          🚫
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
