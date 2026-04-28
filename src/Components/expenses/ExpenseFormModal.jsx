import React, { useState, useEffect } from 'react';
import { useExpenseContext } from '../../Context/Expensecontext';
import categories from '../../utils/categories';
import './ExpenseFormModal.css';

const ExpenseFormModal = ({ isOpen, onClose, initialDate, expenseToEdit = null }) => {
  const { addExpense, updateExpense } = useExpenseContext();
  const [formData, setFormData] = useState({
    date: initialDate || new Date().toISOString().split('T')[0],
    category: 'Food',
    type: 'expense',
    amount: '',
    description: '',
    paymentMethod: 'Cash',
  });

  const paymentMethods = ['Cash', 'Debit Card', 'Credit Card', 'Bank Transfer', 'Online', 'Card'];

  useEffect(() => {
    if (expenseToEdit) {
      setFormData(expenseToEdit);
    } else if (initialDate) {
      setFormData(prev => ({ ...prev, date: initialDate }));
    }
  }, [initialDate, expenseToEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'amount' ? (value ? parseFloat(value) : '') : value
    }));
  };

  const handleTypeChange = (e) => {
    const type = e.target.value;
    const defaultCategory = type === 'income' ? 'Salary' : 'Food';
    setFormData(prev => ({
      ...prev,
      type,
      category: defaultCategory
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.amount || formData.amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    if (expenseToEdit) {
      updateExpense(expenseToEdit.id, formData);
    } else {
      addExpense(formData);
    }

    setFormData({
      date: new Date().toISOString().split('T')[0],
      category: 'Food',
      type: 'expense',
      amount: '',
      description: '',
      paymentMethod: 'Cash',
    });

    onClose();
  };

  const incomeCategories = categories.filter(cat => cat.type === 'income');
  const expenseCategories = categories.filter(cat => cat.type === 'expense');

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{expenseToEdit ? 'Edit Transaction' : 'Add Transaction'}</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="expense-form">
          {/* Date Field */}
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Type Field */}
          <div className="form-group">
            <label htmlFor="type">Type:</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleTypeChange}
              required
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>

          {/* Category Field */}
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              {(formData.type === 'income' ? incomeCategories : expenseCategories).map(cat => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>

          {/* Amount Field */}
          <div className="form-group">
            <label htmlFor="amount">Amount ($):</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder="0.00"
              step="0.01"
              min="0"
              required
            />
          </div>

          {/* Description Field */}
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter description"
            />
          </div>

          {/* Payment Method Field */}
          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Method:</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              required
            >
              {paymentMethods.map(method => (
                <option key={method} value={method}>{method}</option>
              ))}
            </select>
          </div>

          {/* Form Actions */}
          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              {expenseToEdit ? 'Update' : 'Add'} Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseFormModal;
