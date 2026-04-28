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
import { getMonthlyTotals, getExpensesForDate, getDailyTotals } from '../../utils/expenseHelpers';
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

        <div className="month-summary">
          <div className="summary-card income">
            <span className="label">Total Income</span>
            <span className="amount">₹{monthTotals.income.toFixed(2)}</span>
          </div>
          <div className="summary-card expense">
            <span className="label">Total Expenses</span>
            <span className="amount">₹{monthTotals.expense.toFixed(2)}</span>
          </div>
          <div className="summary-card balance">
            <span className="label">Balance</span>
            <span className="amount" style={{ color: monthTotals.balance >= 0 ? '#10b981' : '#ef4444' }}>
              ₹{monthTotals.balance.toFixed(2)}
            </span>
          </div>
        </div>

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

        <div className="calendar-grid">

          <div className="weekday-header">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="weekday">{day}</div>
            ))}
          </div>


          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} className="calendar-day empty"></div>
          ))}


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


          {Array.from({ length: 42 - firstDay - daysInMonth }).map((_, i) => (
            <div key={`empty-after-${i}`} className="calendar-day empty"></div>
          ))}
        </div>

        <div className="action-buttons">
          <button 
            className="btn-view-transactions"
            onClick={() => setShowExpenseList(!showExpenseList)}
          >
            {showExpenseList ? 'Hide Transactions' : 'View Transactions'}
          </button>
        </div>

        {selectedDate && (
          <div className="selected-date-section">
            <h3>{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h3>
            
            {(() => {
              const dateTotals = getDailyTotals(expenses, selectedDate);
              const dateExpenses = getExpensesForDate(expenses, selectedDate);
              
              return (
                <>
                  <div className="date-summary">
                    <div className="date-summary-card income">
                      <span className="label">Income</span>
                      <span className="amount">₹{dateTotals.income.toFixed(2)}</span>
                    </div>
                    <div className="date-summary-card expense">
                      <span className="label">Expenses</span>
                      <span className="amount">₹{dateTotals.expense.toFixed(2)}</span>
                    </div>
                    <div className="date-summary-card balance">
                      <span className="label">Balance</span>
                      <span className="amount" style={{ color: (dateTotals.income - dateTotals.expense) >= 0 ? '#10b981' : '#ef4444' }}>
                        ₹{(dateTotals.income - dateTotals.expense).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {dateExpenses.length > 0 ? (
                    <div className="date-transactions">
                      <h4>Transactions</h4>
                      <div className="transactions-list">
                        {dateExpenses.map(exp => (
                          <div key={exp.id} className={`transaction-item ${exp.type}`}>
                            <div className="transaction-info">
                              <span className="category">{exp.category}</span>
                              <span className="description">{exp.description}</span>
                            </div>
                            <span className={`amount ${exp.type}`}>
                              {exp.type === 'income' ? '+' : '-'}₹{exp.amount.toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="no-transactions">No transactions for this date</div>
                  )}

                  <button 
                    className="btn-add-transaction"
                    onClick={() => setIsModalOpen(true)}
                  >
                    + Add Transaction
                  </button>
                </>
              );
            })()}
          </div>
        )}

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
