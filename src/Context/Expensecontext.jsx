import React, { createContext, useContext, useState, useEffect } from 'react';
import { sampleExpenses } from '../data/sampleData';

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [monthlyBudget, setMonthlyBudget] = useState(3000);

  // Initialize expenses from localStorage or use sample data
  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses');
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    } else {
      setExpenses(sampleExpenses);
      localStorage.setItem('expenses', JSON.stringify(sampleExpenses));
    }
  }, []);

  // Save expenses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.max(...expenses.map(e => e.id), 0) + 1
    };
    setExpenses([...expenses, newExpense]);
    return newExpense;
  };

  const updateExpense = (id, updatedExpense) => {
    setExpenses(expenses.map(exp => exp.id === id ? { ...updatedExpense, id } : exp));
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const value = {
    expenses,
    addExpense,
    updateExpense,
    deleteExpense,
    selectedDate,
    setSelectedDate,
    selectedYear,
    setSelectedYear,
    selectedMonth,
    setSelectedMonth,
    monthlyBudget,
    setMonthlyBudget,
  };

  return (
    <ExpenseContext.Provider value={value}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenseContext = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpenseContext must be used within ExpenseProvider');
  }
  return context;
};
