import React from 'react';
import MonthGrid from '../Components/calendar/MonthGrid';
import './CalendarPage.css';

const CalendarPage = () => {
  return (
    <div className="calendar-page">
      <div className="calendar-page-header">
        <h1> Calendar View</h1>
        <p>View and manage your transactions by date</p>
      </div>
      <MonthGrid />
    </div>
  );
};

export default CalendarPage;