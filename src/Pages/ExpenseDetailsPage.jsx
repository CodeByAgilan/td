import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useExpenseContext } from '../Context/Expensecontext';
import ExpenseFormModal from '../Components/expenses/ExpenseFormModal';
import './ExpenseDetailsPage.css';

const ExpenseDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { expenses, deleteExpense } = useExpenseContext();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const expense = expenses.find(exp => exp.id === parseInt(id));

  if (!expense) {
    return (
      <div className="expense-details-page">
        <div className="not-found-message">
          <div className="not-found-icon"></div>
          <h2>Transaction Not Found</h2>
          <p>The transaction you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/')} className="btn-back">
            ← Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      deleteExpense(expense.id);
      navigate('/');
    }
  };

  return (
    <div className="expense-details-page">
      <div className="details-container">
        <button onClick={() => navigate('/')} className="btn-back">
          ← Back to Dashboard
        </button>

        <div className={`details-card ${expense.type}`}>
          <div className="card-header">
            <div className="category-section">
              <div className="category-text">
                <h1>{expense.category}</h1>
                <p className="type-badge">{expense.type.toUpperCase()}</p>
              </div>
            </div>
            <div className={`amount-display ${expense.type}`}>
              {expense.type === 'income' ? '+' : '-'}₹{expense.amount.toFixed(2)}
            </div>
          </div>

          <div className="details-grid">
            <div className="detail-item">
              <label>Date</label>
              <p>{new Date(expense.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</p>
            </div>

            <div className="detail-item">
              <label>Payment Method</label>
              <p>{expense.paymentMethod}</p>
            </div>

            <div className="detail-item">
              <label>Amount</label>
              <p className="amount">₹{expense.amount.toFixed(2)}</p>
            </div>

            <div className="detail-item">
              <label>Transaction ID</label>
              <p className="transaction-id">#{expense.id}</p>
            </div>

            {expense.description && (
              <div className="detail-item full-width">
                <label>Description</label>
                <p className="description">{expense.description}</p>
              </div>
            )}
          </div>

          <div className="action-buttons">
            <button 
              className="btn-edit"
              onClick={() => setIsEditModalOpen(true)}
            >
              Edit Transaction
            </button>
            <button 
              className="btn-delete"
              onClick={handleDelete}
            >
               Delete Transaction
            </button>
          </div>
        </div>


        <div className="additional-info">
          <h3>Transaction Details</h3>
          <ul>
            <li>
              <span>Category:</span> <strong>{expense.category}</strong>
            </li>
            <li>
              <span>Type:</span> <strong>{expense.type === 'income' ? 'Income' : 'Expense'}</strong>
            </li>
            <li>
              <span>Payment Method:</span> <strong>{expense.paymentMethod}</strong>
            </li>
            <li>
              <span>Date:</span> <strong>{expense.date}</strong>
            </li>
            {expense.description && (
              <li>
                <span>Note:</span> <strong>{expense.description}</strong>
              </li>
            )}
          </ul>
        </div>
      </div>

      {isEditModalOpen && (
        <ExpenseFormModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          expenseToEdit={expense}
        />
      )}
    </div>
  );
};

export default ExpenseDetailsPage;
