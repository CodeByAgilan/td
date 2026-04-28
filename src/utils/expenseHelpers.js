
export const calculateTotals = (expenses, date) => {
  let income = 0;
  let expense = 0;

  expenses.forEach(exp => {
    if (date && exp.date !== date) return;
    if (exp.type === 'income') {
      income += exp.amount;
    } else if (exp.type === 'expense') {
      expense += exp.amount;
    }
  });

  return { income, expense, balance: income - expense };
};

export const getMonthTotals = (expenses, year, month) => {
  let income = 0;
  let expense = 0;

  expenses.forEach(exp => {
    const expDate = new Date(exp.date);
    if (expDate.getFullYear() === year && expDate.getMonth() === month) {
      if (exp.type === 'income') {
        income += exp.amount;
      } else if (exp.type === 'expense') {
        expense += exp.amount;
      }
    }
  });

  return { income, expense, balance: income - expense };
};

export const getMonthlyTotals = (expenses, year, month) => {
  return getMonthTotals(expenses, year, month);
};

export const getDailyTotals = (expenses, dateStr) => {
  let income = 0;
  let expense = 0;

  expenses.forEach(exp => {
    if (exp.date === dateStr) {
      if (exp.type === 'income') {
        income += exp.amount;
      } else if (exp.type === 'expense') {
        expense += exp.amount;
      }
    }
  });

  return { income, expense, balance: income - expense };
};

export const getYearTotals = (expenses, year) => {
  let income = 0;
  let expense = 0;

  expenses.forEach(exp => {
    const expDate = new Date(exp.date);
    if (expDate.getFullYear() === year) {
      if (exp.type === 'income') {
        income += exp.amount;
      } else if (exp.type === 'expense') {
        expense += exp.amount;
      }
    }
  });

  return { income, expense, balance: income - expense };
};

export const getExpensesForDate = (expenses, date) => {
  return expenses.filter(exp => exp.date === date);
};

export const getExpensesForMonth = (expenses, year, month) => {
  return expenses.filter(exp => {
    const expDate = new Date(exp.date);
    return expDate.getFullYear() === year && expDate.getMonth() === month;
  });
};

export const getExpensesByMonth = (expenses, year, month) => {
  return getExpensesForMonth(expenses, year, month);
};

export const filterExpensesByCategory = (expenses, category) => {
  return expenses.filter(exp => exp.category === category);
};

export const filterExpensesByType = (expenses, type) => {
  return expenses.filter(exp => exp.type === type);
};

export const filterExpensesByDateRange = (expenses, startDate, endDate) => {
  return expenses.filter(exp => exp.date >= startDate && exp.date <= endDate);
};

export const filterExpensesByAmountRange = (expenses, minAmount, maxAmount) => {
  return expenses.filter(exp => exp.amount >= minAmount && exp.amount <= maxAmount);
};

export const searchExpenses = (expenses, query) => {
  const lowerQuery = query.toLowerCase();
  return expenses.filter(exp =>
    exp.description.toLowerCase().includes(lowerQuery) ||
    exp.category.toLowerCase().includes(lowerQuery) ||
    exp.amount.toString().includes(query)
  );
};

export const getTotalIncome = (expenses) => {
  return expenses.filter(exp => exp.type === 'income').reduce((sum, exp) => sum + exp.amount, 0);
};

export const getTotalExpenses = (expenses) => {
  return expenses.filter(exp => exp.type === 'expense').reduce((sum, exp) => sum + exp.amount, 0);
};

export const getRecentTransactions = (expenses, limit = 5) => {
  return expenses.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, limit);
};
