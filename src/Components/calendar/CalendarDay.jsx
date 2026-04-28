import React, { useState } from 'react';
import { useExpenseContext } from '../../Context/Expensecontext';
import { getDailyTotals } from '../../utils/expenseHelpers';
import { formatDate, isDateInFuture } from '../../utils/dateHelpers';
import './CalendarDay.css';

const CalendarDay = ({ year, month, day, isCurrentMonth, onDateClick }) => {
  const { expenses, selectedDate } = useExpenseContext();
  const dateStr = formatDate(year, month, day);
  const dayTotals = getDailyTotals(expenses, dateStr);
  const isFuture = isDateInFuture(year, month, day);
  const isSelected = selectedDate === dateStr;
  const isToday = dateStr === formatDate(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );

  const hasIncome = dayTotals.income > 0;
  const hasExpense = dayTotals.expense > 0;

  return (
    <div
      className={`calendar-day ${!isCurrentMonth ? 'other-month' : ''} ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${isFuture ? 'future' : ''}`}
      onClick={() => !isFuture && onDateClick(dateStr)}
      style={{ cursor: isFuture ? 'not-allowed' : 'pointer', opacity: isFuture ? 0.5 : 1 }}
    >
      <div className="day-number">{day}</div>
      
      {isCurrentMonth && (dayTotals.income > 0 || dayTotals.expense > 0) && (
        <div className="day-indicators">
          {hasIncome && (
            <div className="indicator income-indicator" title={`Income: $${dayTotals.income}`}>
              <span className="amount">${dayTotals.income}</span>
            </div>
          )}
          {hasExpense && (
            <div className="indicator expense-indicator" title={`Expense: $${dayTotals.expense}`}>
              <span className="amount">${dayTotals.expense}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CalendarDay;
