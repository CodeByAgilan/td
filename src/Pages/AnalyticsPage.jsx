import React, { useMemo } from 'react';
import { useExpenseContext } from '../Context/Expensecontext';
import { getMonthlyTotals } from '../utils/expenseHelpers';
import './AnalyticsPage.css';

const AnalyticsPage = () => {
  const { expenses } = useExpenseContext();

  const monthlyData = useMemo(() => {
    const data = {};
    for (let year = 2024; year <= 2026; year++) {
      for (let month = 0; month < 12; month++) {
        const key = `${year}-${String(month + 1).padStart(2, '0')}`;
        data[key] = getMonthlyTotals(expenses, year, month);
      }
    }
    return data;
  }, [expenses]);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const current2024 = Object.entries(monthlyData)
    .filter(([key]) => key.startsWith('2024'))
    .reduce((sum, [, data]) => sum + data.income - data.expense, 0);

  const current2025 = Object.entries(monthlyData)
    .filter(([key]) => key.startsWith('2025'))
    .reduce((sum, [, data]) => sum + data.income - data.expense, 0);

  const current2026 = Object.entries(monthlyData)
    .filter(([key]) => key.startsWith('2026'))
    .reduce((sum, [, data]) => sum + data.income - data.expense, 0);



  return (
    <div className="analytics-page">
      <div className="analytics-header">
        <h1> Analytics & Insights</h1>
        <p>Analyze your financial trends and patterns</p>
      </div>

      {/* Yearly Summary */}
      <div className="analytics-section">
        <h2> Yearly Summary</h2>
        <div className="yearly-cards">
          <div className="year-card">
            <div className="year-label">2024</div>
            <div className="year-amount positive">₹{current2024.toFixed(2)}</div>
            <div className="year-desc">Net Balance</div>
          </div>
          <div className="year-card">
            <div className="year-label">2025</div>
            <div className="year-amount positive">₹{current2025.toFixed(2)}</div>
            <div className="year-desc">Net Balance</div>
          </div>
          <div className="year-card">
            <div className="year-label">2026 (YTD)</div>
            <div className={`year-amount ${current2026 >= 0 ? 'positive' : 'negative'}`}>
              ₹{current2026.toFixed(2)}
            </div>
            <div className="year-desc">Net Balance</div>
          </div>
        </div>
      </div>


      <div className="analytics-section">
        <h2> Key Metrics</h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-icon"></div>
            <div className="metric-label">Total Income</div>
            <div className="metric-value income">
              ₹{expenses
                .filter(e => e.type === 'income')
                .reduce((sum, e) => sum + e.amount, 0)
                .toFixed(2)}
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">💸</div>
            <div className="metric-label">Total Expenses</div>
            <div className="metric-value expense">
              ₹{expenses
                .filter(e => e.type === 'expense')
                .reduce((sum, e) => sum + e.amount, 0)
                .toFixed(2)}
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Avg Monthly Income</div>
            <div className="metric-value">
              ₹{(expenses
                .filter(e => e.type === 'income')
                .reduce((sum, e) => sum + e.amount, 0) / 16)
                .toFixed(2)}
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Avg Monthly Expense</div>
            <div className="metric-value">
              ₹{(expenses
                .filter(e => e.type === 'expense')
                .reduce((sum, e) => sum + e.amount, 0) / 16)
                .toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
