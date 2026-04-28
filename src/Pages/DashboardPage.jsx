import React from 'react';
import { Link } from 'react-router-dom';
import { useExpenseContext } from '../Context/Expensecontext';
import { getTotalIncome, getTotalExpenses, getRecentTransactions } from '../utils/expenseHelpers';
import ExpenseCard from '../Components/expenses/ExpenseCard';
import './DashboardPage.css';

const DashboardPage = () => {
  const { expenses, monthlyBudget, setMonthlyBudget } = useExpenseContext();

  const totalIncome = getTotalIncome(expenses);
  const totalExpenses = getTotalExpenses(expenses);
  const balance = totalIncome - totalExpenses;
  const recentTransactions = getRecentTransactions(expenses, 5);

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const monthExpenses = expenses.filter(exp => {
    const expDate = new Date(exp.date);
    return expDate.getMonth() === currentMonth && expDate.getFullYear() === currentYear && exp.type === 'expense';
  });
  const monthTotal = monthExpenses.reduce((sum, exp) => sum + exp.amount, 0);
  const budgetExceeded = monthTotal > monthlyBudget;

  const handleBudgetChange = (e) => {
    setMonthlyBudget(parseFloat(e.target.value) || 0);
  };

  return (
    <div className="dashboard-page">
      {/* Header */}
      <div className="dashboard-header">
        <h1> Personal Expense Tracker</h1>
        <p>Track your daily financial activities</p>
      </div>

      {/* Overview Cards */}
      <div className="overview-section">
        <div className="overview-card income-card">
          <div className="card-icon"></div>
          <div className="card-content">
            <span className="card-label">Total Income</span>
            <span className="card-amount">${totalIncome.toFixed(2)}</span>
          </div>
        </div>

        <div className="overview-card expense-card">
          <div className="card-icon"></div>
          <div className="card-content">
            <span className="card-label">Total Expenses</span>
            <span className="card-amount">${totalExpenses.toFixed(2)}</span>
          </div>
        </div>

        <div className={`overview-card balance-card ${balance >= 0 ? 'positive' : 'negative'}`}>
          <div className="card-icon"></div>
          <div className="card-content">
            <span className="card-label">Remaining Balance</span>
            <span className="card-amount">${balance.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Budget Section */}
      <div className="budget-section">
        <h3>Monthly Budget</h3>
        <div className="budget-input">
          <label>Budget Limit ($):</label>
          <input
            type="number"
            value={monthlyBudget}
            onChange={handleBudgetChange}
            min="0"
            step="50"
          />
        </div>

        <div className={`budget-status ${budgetExceeded ? 'exceeded' : 'ok'}`}>
          <div className="budget-info">
            <span className="current-month">Current Month Expenses: ${monthTotal.toFixed(2)}</span>
            <span className="budget-limit">Budget: ${monthlyBudget.toFixed(2)}</span>
          </div>
          {budgetExceeded && (
            <div className="budget-warning">
               Budget Exceeded by ${(monthTotal - monthlyBudget).toFixed(2)}
            </div>
          )}
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="navigation-section">
        <h3>Quick Actions</h3>
        <div className="nav-buttons">
          <Link to="/calendar" className="nav-btn calendar-btn">
             Open Calendar
          </Link>
          <Link to="/analytics" className="nav-btn analytics-btn">
             View Analytics
          </Link>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="recent-transactions-section">
        <h3>Recent Transactions</h3>
        <div className="transactions-grid">
          {recentTransactions.length > 0 ? (
            recentTransactions.map(transaction => (
              <ExpenseCard key={transaction.id} expense={transaction} />
            ))
          ) : (
            <div className="empty-state">
              <span>No transactions yet. Start adding your first transaction!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;











// export default function Apps() {
//  return (
//    <BrowserRouter>
//      <nav>
//        <Link to="/">Home</Link> |{" "}
//        <Link to="/about">About</Link> |{" "}
//        <Link to="/contact">Contact</Link>
//        <Link to="/CAL">CalendarGfg</Link>
//      </nav>

//      <Routes>
//        <Route path="/" element={<Home />} />
//        <Route path="/about" element={<About />} />
//        <Route path="/contact" element={<Contact />} />
//        <Route path="/CAL" element={<CalendarGfg/>} />
//        <Route path="*" element={<Home/>}/>
//      </Routes>
//    </BrowserRouter>
//  );
// }