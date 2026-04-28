import React, { useState } from 'react';
import { useExpenseContext } from '../../Context/Expensecontext';
import { getExpensesByMonth } from '../../utils/expenseHelpers';
import ExpenseCard from './ExpenseCard';
import './ExpenseList.css';

const ExpenseList = ({ year, month }) => {
  const { expenses } = useExpenseContext();
  const monthExpenses = getExpensesByMonth(expenses, year, month);

  const incomeTransactions = monthExpenses.filter(exp => exp.type === 'income');
  const expenseTransactions = monthExpenses.filter(exp => exp.type === 'expense');

  const [expandedType, setExpandedType] = useState('all');

  const toggleExpand = (type) => {
    setExpandedType(expandedType === type ? 'all' : type);
  };

  return (
    <div className="expense-list-container">
      <h3>Transactions for {year}</h3>

      {/* Income Transactions */}
      <div className="transaction-section">
        <div 
          className="section-header income-header"
          onClick={() => toggleExpand('income')}
        >
          <span>Income ({incomeTransactions.length})</span>
          <span className="toggle-icon">{expandedType === 'income' ? '▼' : '▶'}</span>
        </div>
        
        {(expandedType === 'all' || expandedType === 'income') && (
          <div className="transactions-list">
            {incomeTransactions.length > 0 ? (
              incomeTransactions.map(expense => (
                <ExpenseCard key={expense.id} expense={expense} />
              ))
            ) : (
              <p className="empty-message">No income transactions</p>
            )}
          </div>
        )}
      </div>

      {/* Expense Transactions */}
      <div className="transaction-section">
        <div 
          className="section-header expense-header"
          onClick={() => toggleExpand('expense')}
        >
          <span>Expenses ({expenseTransactions.length})</span>
          <span className="toggle-icon">{expandedType === 'expense' ? '▼' : '▶'}</span>
        </div>
        
        {(expandedType === 'all' || expandedType === 'expense') && (
          <div className="transactions-list">
            {expenseTransactions.length > 0 ? (
              expenseTransactions.map(expense => (
                <ExpenseCard key={expense.id} expense={expense} />
              ))
            ) : (
              <p className="empty-message">No expense transactions</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseList;
