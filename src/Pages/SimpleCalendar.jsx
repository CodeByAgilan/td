import { useState } from 'react';
import { useExpenseContext } from '../Context/Expensecontext';
import '../styles/SimpleCalendar.css';

export default function SimpleCalendar() {
  const { expenses, selectedDate, setSelectedDate } = useExpenseContext();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
  const days = [];

  // Empty cells before month starts
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Days of month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (day) => {
    if (day) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      setSelectedDate(dateStr);
    }
  };

  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getExpensesForDate = (date) => {
    return expenses.filter(exp => exp.date === date);
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const selectedExpenses = selectedDate ? getExpensesForDate(selectedDate) : [];

  return (
    <div className="calendar-container">
      <h1>Calendar View</h1>

      <div className="calendar-wrapper">
        {/* Calendar */}
        <div className="calendar-section">
          <div className="month-header">
            <button onClick={handlePrevMonth} className="nav-btn">&lt;</button>
            <h2>{monthNames[currentMonth]} {currentYear}</h2>
            <button onClick={handleNextMonth} className="nav-btn">&gt;</button>
          </div>

          <div className="calendar-grid">
            {/* Day names */}
            <div className="day-names">
              {dayNames.map(day => (
                <div key={day} className="day-name">{day}</div>
              ))}
            </div>

            {/* Calendar days */}
            <div className="days-grid">
              {days.map((day, index) => {
                const dateStr = day ? `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}` : '';
                const dayExpenses = day ? getExpensesForDate(dateStr) : [];
                const isSelected = selectedDate === dateStr;
                const isToday = day && new Date().toISOString().split('T')[0] === dateStr;

                return (
                  <div
                    key={index}
                    className={`calendar-day ${day ? '' : 'empty'} ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
                    onClick={() => handleDateClick(day)}
                  >
                    {day && (
                      <>
                        <div className="day-number">{day}</div>
                        {dayExpenses.length > 0 && (
                          <div className="day-total">₹{dayExpenses.reduce((sum, exp) => sum + exp.amount, 0)}</div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Date Details */}
        <div className="date-details-section">
          {selectedDate && (
            <>
              <h2>Date: {formatDate(selectedDate)}</h2>
              
              {selectedExpenses.length === 0 ? (
                <p className="no-data">No expenses on this date</p>
              ) : (
                <div className="expenses-on-date">
                  <h3>Expenses ({selectedExpenses.length})</h3>
                  {selectedExpenses.map(exp => (
                    <div key={exp.id} className="date-expense-item">
                      <div className="expense-info">
                        <p className="exp-desc">{exp.description}</p>
                        <p className="exp-cat">{exp.category}</p>
                      </div>
                      <p className="exp-amt">₹{exp.amount.toFixed(2)}</p>
                    </div>
                  ))}
                  <div className="date-total">
                    Total: ₹{selectedExpenses.reduce((sum, exp) => sum + exp.amount, 0).toFixed(2)}
                  </div>
                </div>
              )}
            </>
          )}

          {!selectedDate && (
            <p className="select-date-msg">Click on a date to view expenses</p>
          )}
        </div>
      </div>
    </div>
  );
}
