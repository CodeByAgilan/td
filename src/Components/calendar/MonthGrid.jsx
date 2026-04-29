import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useExpenseContext } from '../../Context/Expensecontext';
import ExpenseFormModal from '../expenses/ExpenseFormModal';
import { getMonthlyTotals, getExpensesForDate, getDailyTotals } from '../../utils/expenseHelpers';
import './MonthGrid.css';

const MonthGrid = () => {
  const { expenses, setSelectedDate, selectedDate } = useExpenseContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calendarDate, setCalendarDate] = useState(new Date(2026, 3, 1));

  const handleDateClick = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;
    setSelectedDate(dateStr);
    setCalendarDate(date);
  };

  const currentMonth = calendarDate.getMonth();
  const currentYear = calendarDate.getFullYear();
  const monthTotals = getMonthlyTotals(expenses, currentYear, currentMonth);

  return (
    <div className="month-grid-container">
      <div className="calendar-wrapper">
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

        <div className="calendar-content-row">
          <div className="react-calendar-wrapper">
            <Calendar
              value={calendarDate}
              onChange={handleDateClick}
              className="custom-calendar"
              tileClassName="calendar-tile"
            />
          </div>

          <div className="selected-date-section">
            {selectedDate ? (
              <>
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
              </>
            ) : (
              <div className="no-date-selected">
                <p>Select a date to view transactions</p>
              </div>
            )}
          </div>
        </div>

      </div>

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
