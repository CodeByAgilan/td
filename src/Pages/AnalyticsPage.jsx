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

  const categoryBreakdown = useMemo(() => {
    const categories = {};
    expenses.forEach(exp => {
      if (exp.type === 'expense') {
        categories[exp.category] = (categories[exp.category] || 0) + exp.amount;
      }
    });
    return categories;
  }, [expenses]);

  return (
    <div className="analytics-page">
      <div className="analytics-header">
        <h1>📈 Analytics & Insights</h1>
        <p>Analyze your financial trends and patterns</p>
      </div>

      {/* Yearly Summary */}
      <div className="analytics-section">
        <h2>💡 Yearly Summary</h2>
        <div className="yearly-cards">
          <div className="year-card">
            <div className="year-label">2024</div>
            <div className="year-amount positive">${current2024.toFixed(2)}</div>
            <div className="year-desc">Net Balance</div>
          </div>
          <div className="year-card">
            <div className="year-label">2025</div>
            <div className="year-amount positive">${current2025.toFixed(2)}</div>
            <div className="year-desc">Net Balance</div>
          </div>
          <div className="year-card">
            <div className="year-label">2026 (YTD)</div>
            <div className={`year-amount ${current2026 >= 0 ? 'positive' : 'negative'}`}>
              ${current2026.toFixed(2)}
            </div>
            <div className="year-desc">Net Balance</div>
          </div>
        </div>
      </div>

      {/* Monthly Breakdown */}
      <div className="analytics-section">
        <h2>📊 Monthly Breakdown (2024)</h2>
        <div className="monthly-chart">
          {months.map((month, index) => {
            const key = `2024-${String(index + 1).padStart(2, '0')}`;
            const data = monthlyData[key] || { income: 0, expense: 0, balance: 0 };
            const maxBalance = 15000;
            const chartHeight = (Math.abs(data.balance) / maxBalance) * 200;
            
            return (
              <div key={month} className="chart-bar">
                <div className={`bar ${data.balance >= 0 ? 'positive' : 'negative'}`}
                     style={{ height: `${Math.min(chartHeight, 200)}px` }}
                     title={`Balance: $${data.balance.toFixed(2)}`}>
                </div>
                <div className="bar-label">{month}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="analytics-section">
        <h2>🏷️ Expense by Category</h2>
        <div className="category-breakdown">
          {Object.entries(categoryBreakdown)
            .sort(([, a], [, b]) => b - a)
            .map(([category, amount]) => {
              const total = Object.values(categoryBreakdown).reduce((a, b) => a + b, 0);
              const percentage = (amount / total) * 100;
              
              return (
                <div key={category} className="category-item">
                  <div className="category-info">
                    <span className="category-name">{category}</span>
                    <span className="category-amount">${amount.toFixed(2)}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
                  </div>
                  <div className="percentage">{percentage.toFixed(1)}%</div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="analytics-section">
        <h2>📌 Key Metrics</h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-icon">💰</div>
            <div className="metric-label">Total Income</div>
            <div className="metric-value income">
              ${expenses
                .filter(e => e.type === 'income')
                .reduce((sum, e) => sum + e.amount, 0)
                .toFixed(2)}
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">💸</div>
            <div className="metric-label">Total Expenses</div>
            <div className="metric-value expense">
              ${expenses
                .filter(e => e.type === 'expense')
                .reduce((sum, e) => sum + e.amount, 0)
                .toFixed(2)}
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">📊</div>
            <div className="metric-label">Avg Monthly Income</div>
            <div className="metric-value">
              ${(expenses
                .filter(e => e.type === 'income')
                .reduce((sum, e) => sum + e.amount, 0) / 16)
                .toFixed(2)}
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">🎯</div>
            <div className="metric-label">Avg Monthly Expense</div>
            <div className="metric-value">
              ${(expenses
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
