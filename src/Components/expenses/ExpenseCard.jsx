import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useExpenseContext } from '../../Context/Expensecontext';
import ExpenseFormModal from './ExpenseFormModal';
import './ExpenseCard.css';

const ExpenseCard = ({ expense }) => {
  const { deleteExpense } = useExpenseContext();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      deleteExpense(expense.id);
    }
  };

  return (
    <>
      <Link to={`/expenses/${expense.id}`} className="expense-card-link">
        <div className={`expense-card ${expense.type}`}>
          <div className="card-header">
            <div className="category-info">
              <div className="category-details">
                <span className="category-name">{expense.category}</span>
                <span className="card-date">{expense.date}</span>
              </div>
            </div>
            <span className={`amount ${expense.type}`}>
              {expense.type === 'income' ? '+' : '-'}₹{expense.amount.toFixed(2)}
            </span>
          </div>

          {expense.description && (
            <div className="card-description">
              <span>{expense.description}</span>
            </div>
          )}

          <div className="card-footer">
            <span className="payment-method">{expense.paymentMethod}</span>
            <div className="card-actions">
              <button 
                className="btn-edit"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsEditModalOpen(true);
                }}
                title="Edit"
              >
                Edit
              </button>
              <button 
                className="btn-delete"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleDelete();
                }}
                title="Delete"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </Link>

      {isEditModalOpen && (
        <ExpenseFormModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          expenseToEdit={expense}
        />
      )}
    </>
  );
};

export default ExpenseCard;
