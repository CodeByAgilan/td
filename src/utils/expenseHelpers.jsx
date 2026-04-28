// Expense helper utilities

export const calculateTotalByType = (expenses, type) => {
  return expenses
    .filter(expense => expense.type === type)
    .reduce((total, expense) => total + expense.amount, 0);
};

export const getExpensesByDate = (expenses, date) => {
  return expenses.filter(expense => expense.date === date);
};

export const getExpensesByMonth = (expenses, year, month) => {
  const monthStr = String(month + 1).padStart(2, '0');
  const yearMonth = `${year}-${monthStr}`;
  return expenses.filter(expense => expense.date.startsWith(yearMonth));
};

export const getExpensesByCategory = (expenses, category) => {
  return expenses.filter(expense => expense.category === category);
};

export const getMonthlyTotals = (expenses, year, month) => {
  const monthExpenses = getExpensesByMonth(expenses, year, month);
  
  const income = calculateTotalByType(monthExpenses, 'income');
  const expense = calculateTotalByType(monthExpenses, 'expense');
  const balance = income - expense;

  return { income, expense, balance };
};

export const getDailyTotals = (expenses, date) => {
  const dayExpenses = getExpensesByDate(expenses, date);
  
  const income = calculateTotalByType(dayExpenses, 'income');
  const expense = calculateTotalByType(dayExpenses, 'expense');
  
  return { income, expense };
};

export const getTotalIncome = (expenses) => {
  return calculateTotalByType(expenses, 'income');
};

export const getTotalExpenses = (expenses) => {
  return calculateTotalByType(expenses, 'expense');
};

export const getRecentTransactions = (expenses, limit = 5) => {
  return expenses
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

export const getYearlyTotals = (expenses, year) => {
  const yearExpenses = expenses.filter(exp => exp.date.startsWith(year));
  
  const income = calculateTotalByType(yearExpenses, 'income');
  const expense = calculateTotalByType(yearExpenses, 'expense');
  const balance = income - expense;

  return { income, expense, balance };
};
