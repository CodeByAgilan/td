import React, { useState } from 'react';
import { useExpenseContext } from '../../Context/Expensecontext';
import YearSelector from './YearSelector';
import CalendarDay from './CalendarDay';
import ExpenseFormModal from '../expenses/ExpenseFormModal';
import ExpenseList from '../expenses/ExpenseList';
import {
  getDaysInMonth,
  getFirstDayOfMonth,
  getMonthName,
  isMonthDisabled,
  formatDate,
} from '../../utils/dateHelpers';
import { getMonthlyTotals } from '../../utils/expenseHelpers';
import './MonthGrid.css';

const MonthGrid = () => {
  const { selectedYear, setSelectedYear, selectedMonth, setSelectedMonth, expenses, setSelectedDate, selectedDate } = useExpenseContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showExpenseList, setShowExpenseList] = useState(false);

  const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);
  const firstDay = getFirstDayOfMonth(selectedYear, selectedMonth);
  const monthName = getMonthName(selectedMonth);

  const monthTotals = getMonthlyTotals(expenses, selectedYear, selectedMonth);
  const previousMonths = Array.from({ length: selectedMonth }, (_, i) => i);
  const nextMonths = Array.from({ length: 11 - selectedMonth }, (_, i) => selectedMonth + i + 1);

  const handleDateClick = (dateStr) => {
    setSelectedDate(dateStr);
    setIsModalOpen(true);
  };

  const handleMonthClick = (month) => {
    if (!isMonthDisabled(selectedYear, month)) {
      setSelectedMonth(month);
    }
  };

  const handlePrevMonth = () => {
    if (selectedMonth > 0) {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (selectedMonth < 11 && !isMonthDisabled(selectedYear, selectedMonth + 1)) {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  return (
    <div className="month-grid-container">
      <div className="calendar-wrapper">
        <YearSelector />

        {/* Month Navigation */}
        <div className="month-nav">
          <button 
            onClick={handlePrevMonth} 
            disabled={selectedMonth === 0}
            className="nav-btn prev-btn"
          >
            ← Previous
          </button>
          <h2 className="current-month">{monthName} {selectedYear}</h2>
          <button 
            onClick={handleNextMonth}
            disabled={selectedMonth === 11 || isMonthDisabled(selectedYear, selectedMonth + 1)}
            className="nav-btn next-btn"
          >
            Next →
          </button>
        </div>

        {/* Month Summary */}
        <div className="month-summary">
          <div className="summary-card income">
            <span className="label">Total Income</span>
            <span className="amount">${monthTotals.income.toFixed(2)}</span>
          </div>
          <div className="summary-card expense">
            <span className="label">Total Expenses</span>
            <span className="amount">${monthTotals.expense.toFixed(2)}</span>
          </div>
          <div className="summary-card balance">
            <span className="label">Balance</span>
            <span className="amount" style={{ color: monthTotals.balance >= 0 ? '#10b981' : '#ef4444' }}>
              ${monthTotals.balance.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Month Selection Tabs */}
        <div className="month-tabs">
          {previousMonths.map(month => (
            <button
              key={month}
              className={`month-tab ${selectedMonth === month ? 'active' : ''} ${isMonthDisabled(selectedYear, month) ? 'disabled' : ''}`}
              onClick={() => handleMonthClick(month)}
              disabled={isMonthDisabled(selectedYear, month)}
            >
              {getMonthName(month).slice(0, 3)}
            </button>
          ))}
          <button className="month-tab active">{getMonthName(selectedMonth).slice(0, 3)}</button>
          {nextMonths.map(month => (
            <button
              key={month}
              className={`month-tab ${isMonthDisabled(selectedYear, month) ? 'disabled' : ''}`}
              onClick={() => handleMonthClick(month)}
              disabled={isMonthDisabled(selectedYear, month)}
            >
              {getMonthName(month).slice(0, 3)}
            </button>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="calendar-grid">
          {/* Weekday Headers */}
          <div className="weekday-header">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="weekday">{day}</div>
            ))}
          </div>

          {/* Empty cells for days before month starts */}
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} className="calendar-day empty"></div>
          ))}

          {/* Days of the month */}
          {Array.from({ length: daysInMonth }).map((_, i) => (
            <CalendarDay
              key={i}
              year={selectedYear}
              month={selectedMonth}
              day={i + 1}
              isCurrentMonth={true}
              onDateClick={handleDateClick}
            />
          ))}

          {/* Empty cells for days after month ends */}
          {Array.from({ length: 42 - firstDay - daysInMonth }).map((_, i) => (
            <div key={`empty-after-${i}`} className="calendar-day empty"></div>
          ))}
        </div>

        {/* View Transactions Button */}
        <div className="action-buttons">
          <button 
            className="btn-view-transactions"
            onClick={() => setShowExpenseList(!showExpenseList)}
          >
            {showExpenseList ? 'Hide Transactions' : 'View Transactions'}
          </button>
        </div>

        {showExpenseList && <ExpenseList year={selectedYear} month={selectedMonth} />}
      </div>

      {/* Modal for adding expense */}
      {isModalOpen && (
        <ExpenseFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialDate={selectedDate}
        />
      )}
    </div>
  );
};

export default MonthGrid;
