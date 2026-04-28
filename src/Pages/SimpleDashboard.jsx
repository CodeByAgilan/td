import { useState } from 'react';
import { useExpenseContext } from '../Context/Expensecontext';
import '../styles/SimpleDashboard.css';

export default function SimpleDashboard() {
  const { expenses, addExpense, deleteExpense, monthlyBudget, setMonthlyBudget } = useExpenseContext();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [filterCategory, setFilterCategory] = useState('All');
  const [budgetInput, setBudgetInput] = useState(monthlyBudget);

  const categories = ['Food', 'Transport', 'Shopping', 'Entertainment', 'Utilities', 'Other'];

  const handleAddExpense = () => {
    if (description.trim() && amount) {
      addExpense({
        description,
        amount: parseFloat(amount),
        category,
        date: new Date().toISOString().split('T')[0]
      });
      setDescription('');
      setAmount('');
      setCategory('Food');
    }
  };

  const handleSetBudget = () => {
    setMonthlyBudget(parseFloat(budgetInput));
  };

  const filteredExpenses = filterCategory === 'All' 
    ? expenses 
    : expenses.filter(exp => exp.category === filterCategory);

  const totalSpent = filteredExpenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remaining = monthlyBudget - expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      {/* Summary Section */}
      <div className="summary">
        <div className="stat-box">
          <h3>Total Spent</h3>
          <p className="amount">₹{expenses.reduce((sum, exp) => sum + exp.amount, 0).toFixed(2)}</p>
        </div>
        <div className="stat-box">
          <h3>Monthly Budget</h3>
          <p className="amount">₹{monthlyBudget.toFixed(2)}</p>
        </div>
        <div className="stat-box">
          <h3>Remaining</h3>
          <p className={`amount ${remaining < 0 ? 'negative' : 'positive'}`}>₹{remaining.toFixed(2)}</p>
        </div>
      </div>

      {/* Budget Setting */}
      <div className="section">
        <h2>Set Monthly Budget</h2>
        <div className="input-group">
          <input
            type="number"
            value={budgetInput}
            onChange={(e) => setBudgetInput(e.target.value)}
            placeholder="Budget amount"
          />
          <button onClick={handleSetBudget}>Update Budget</button>
        </div>
      </div>

      {/* Add Expense */}
      <div className="section">
        <h2>Add Expense</h2>
        <div className="form">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button onClick={handleAddExpense}>Add</button>
        </div>
      </div>

      {/* Filter by Category */}
      <div className="section">
        <h2>Filter by Category</h2>
        <div className="filters">
          <button
            className={filterCategory === 'All' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilterCategory('All')}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              className={filterCategory === cat ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilterCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <p className="filtered-total">Total: ₹{totalSpent.toFixed(2)}</p>
      </div>

      {/* Expenses List */}
      <div className="section">
        <h2>Expenses ({filteredExpenses.length})</h2>
        {filteredExpenses.length === 0 ? (
          <p className="no-data">No expenses found</p>
        ) : (
          <div className="expenses-list">
            {filteredExpenses.map(exp => (
              <div key={exp.id} className="expense-item">
                <div className="expense-info">
                  <p className="expense-desc">{exp.description}</p>
                  <p className="expense-category">{exp.category}</p>
                </div>
                <div className="expense-amount">
                  <p>₹{exp.amount.toFixed(2)}</p>
                  <button
                    className="delete-btn"
                    onClick={() => deleteExpense(exp.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
