// Sample expense and income data for 2024-2026
export const sampleExpenses = [
  // 2024 Data
  // January 2024
  { id: 1, date: '2024-01-05', category: 'Food', type: 'expense', amount: 450, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 2, date: '2024-01-10', category: 'Transport', type: 'expense', amount: 200, description: 'Gas', paymentMethod: 'Cash' },
  { id: 3, date: '2024-01-15', category: 'Salary', type: 'income', amount: 5200, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 4, date: '2024-01-20', category: 'Entertainment', type: 'expense', amount: 300, description: 'Movie & Dinner', paymentMethod: 'Credit Card' },
  { id: 5, date: '2024-01-25', category: 'Utilities', type: 'expense', amount: 150, description: 'Electricity Bill', paymentMethod: 'Online' },

  // February 2024
  { id: 6, date: '2024-02-05', category: 'Food', type: 'expense', amount: 500, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 7, date: '2024-02-10', category: 'Rent', type: 'expense', amount: 1500, description: 'Monthly Rent', paymentMethod: 'Bank Transfer' },
  { id: 8, date: '2024-02-15', category: 'Salary', type: 'income', amount: 5200, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 9, date: '2024-02-20', category: 'Shopping', type: 'expense', amount: 800, description: 'Clothes Shopping', paymentMethod: 'Credit Card' },
  { id: 10, date: '2024-02-28', category: 'Health', type: 'expense', amount: 300, description: 'Doctor Visit', paymentMethod: 'Cash' },

  // March 2024
  { id: 11, date: '2024-03-05', category: 'Food', type: 'expense', amount: 480, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 12, date: '2024-03-10', category: 'Entertainment', type: 'expense', amount: 250, description: 'Netflix & Games', paymentMethod: 'Credit Card' },
  { id: 13, date: '2024-03-15', category: 'Salary', type: 'income', amount: 5200, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 14, date: '2024-03-18', category: 'Transport', type: 'expense', amount: 180, description: 'Fuel', paymentMethod: 'Cash' },
  { id: 15, date: '2024-03-25', category: 'SIP', type: 'income', amount: 2000, description: 'Monthly SIP Return', paymentMethod: 'Bank Transfer' },

  // April 2024
  { id: 16, date: '2024-04-05', category: 'Food', type: 'expense', amount: 520, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 17, date: '2024-04-10', category: 'Shopping', type: 'expense', amount: 1200, description: 'Electronics', paymentMethod: 'Credit Card' },
  { id: 18, date: '2024-04-15', category: 'Salary', type: 'income', amount: 5200, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 19, date: '2024-04-20', category: 'Travel', type: 'expense', amount: 3000, description: 'Flight Tickets', paymentMethod: 'Credit Card' },
  { id: 20, date: '2024-04-25', category: 'Health', type: 'expense', amount: 400, description: 'Medicine & Tests', paymentMethod: 'Cash' },

  // May 2024
  { id: 21, date: '2024-05-05', category: 'Food', type: 'expense', amount: 490, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 22, date: '2024-05-10', category: 'Rent', type: 'expense', amount: 1500, description: 'Monthly Rent', paymentMethod: 'Bank Transfer' },
  { id: 23, date: '2024-05-15', category: 'Salary', type: 'income', amount: 5200, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 24, date: '2024-05-20', category: 'Education', type: 'expense', amount: 1000, description: 'Online Course', paymentMethod: 'Credit Card' },
  { id: 25, date: '2024-05-28', category: 'Savings', type: 'income', amount: 1000, description: 'Bonus Payment', paymentMethod: 'Bank Transfer' },

  // June 2024
  { id: 26, date: '2024-06-05', category: 'Food', type: 'expense', amount: 510, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 27, date: '2024-06-10', category: 'Entertainment', type: 'expense', amount: 350, description: 'Concert Tickets', paymentMethod: 'Credit Card' },
  { id: 28, date: '2024-06-15', category: 'Salary', type: 'income', amount: 5200, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 29, date: '2024-06-20', category: 'Transport', type: 'expense', amount: 200, description: 'Fuel', paymentMethod: 'Cash' },
  { id: 30, date: '2024-06-25', category: 'EMI', type: 'expense', amount: 2000, description: 'Car EMI', paymentMethod: 'Bank Transfer' },

  // July 2024
  { id: 31, date: '2024-07-05', category: 'Food', type: 'expense', amount: 530, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 32, date: '2024-07-10', category: 'Insurance', type: 'expense', amount: 800, description: 'Health Insurance', paymentMethod: 'Online' },
  { id: 33, date: '2024-07-15', category: 'Salary', type: 'income', amount: 5200, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 34, date: '2024-07-20', category: 'Shopping', type: 'expense', amount: 600, description: 'Accessories', paymentMethod: 'Credit Card' },
  { id: 35, date: '2024-07-28', category: 'Utilities', type: 'expense', amount: 180, description: 'Internet Bill', paymentMethod: 'Online' },

  // August 2024
  { id: 36, date: '2024-08-05', category: 'Food', type: 'expense', amount: 500, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 37, date: '2024-08-10', category: 'Entertainment', type: 'expense', amount: 280, description: 'Games', paymentMethod: 'Credit Card' },
  { id: 38, date: '2024-08-15', category: 'Salary', type: 'income', amount: 5200, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 39, date: '2024-08-20', category: 'Travel', type: 'expense', amount: 2000, description: 'Weekend Trip', paymentMethod: 'Credit Card' },
  { id: 40, date: '2024-08-25', category: 'Health', type: 'expense', amount: 350, description: 'Gym Membership', paymentMethod: 'Card' },

  // September 2024
  { id: 41, date: '2024-09-05', category: 'Food', type: 'expense', amount: 540, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 42, date: '2024-09-10', category: 'Rent', type: 'expense', amount: 1500, description: 'Monthly Rent', paymentMethod: 'Bank Transfer' },
  { id: 43, date: '2024-09-15', category: 'Salary', type: 'income', amount: 5200, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 44, date: '2024-09-20', category: 'Education', type: 'expense', amount: 500, description: 'Books', paymentMethod: 'Online' },
  { id: 45, date: '2024-09-25', category: 'SIP', type: 'income', amount: 2000, description: 'Monthly SIP Return', paymentMethod: 'Bank Transfer' },

  // October 2024
  { id: 46, date: '2024-10-05', category: 'Food', type: 'expense', amount: 520, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 47, date: '2024-10-10', category: 'Entertainment', type: 'expense', amount: 400, description: 'Concert', paymentMethod: 'Credit Card' },
  { id: 48, date: '2024-10-15', category: 'Salary', type: 'income', amount: 5200, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 49, date: '2024-10-20', category: 'Transport', type: 'expense', amount: 250, description: 'Fuel & Maintenance', paymentMethod: 'Cash' },
  { id: 50, date: '2024-10-25', category: 'Shopping', type: 'expense', amount: 900, description: 'Winter Clothes', paymentMethod: 'Credit Card' },

  // November 2024
  { id: 51, date: '2024-11-05', category: 'Food', type: 'expense', amount: 550, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 52, date: '2024-11-10', category: 'Health', type: 'expense', amount: 600, description: 'Dental Checkup', paymentMethod: 'Card' },
  { id: 53, date: '2024-11-15', category: 'Salary', type: 'income', amount: 5200, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 54, date: '2024-11-20', category: 'EMI', type: 'expense', amount: 2000, description: 'Car EMI', paymentMethod: 'Bank Transfer' },
  { id: 55, date: '2024-11-25', category: 'Utilities', type: 'expense', amount: 200, description: 'Bills', paymentMethod: 'Online' },

  // December 2024
  { id: 56, date: '2024-12-05', category: 'Food', type: 'expense', amount: 600, description: 'Groceries & Parties', paymentMethod: 'Debit Card' },
  { id: 57, date: '2024-12-10', category: 'Shopping', type: 'expense', amount: 2000, description: 'Christmas Shopping', paymentMethod: 'Credit Card' },
  { id: 58, date: '2024-12-15', category: 'Salary', type: 'income', amount: 5200, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 59, date: '2024-12-20', category: 'Entertainment', type: 'expense', amount: 500, description: 'Year End Party', paymentMethod: 'Credit Card' },
  { id: 60, date: '2024-12-25', category: 'Travel', type: 'expense', amount: 4000, description: 'Holiday Travel', paymentMethod: 'Credit Card' },

  // 2025 Data
  // January 2025
  { id: 61, date: '2025-01-05', category: 'Food', type: 'expense', amount: 480, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 62, date: '2025-01-10', category: 'Transport', type: 'expense', amount: 220, description: 'Fuel', paymentMethod: 'Cash' },
  { id: 63, date: '2025-01-15', category: 'Salary', type: 'income', amount: 5500, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 64, date: '2025-01-20', category: 'Entertainment', type: 'expense', amount: 350, description: 'Movies', paymentMethod: 'Credit Card' },
  { id: 65, date: '2025-01-28', category: 'Savings', type: 'income', amount: 2000, description: 'Bonus', paymentMethod: 'Bank Transfer' },

  // February 2025
  { id: 66, date: '2025-02-05', category: 'Food', type: 'expense', amount: 500, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 67, date: '2025-02-10', category: 'Rent', type: 'expense', amount: 1500, description: 'Monthly Rent', paymentMethod: 'Bank Transfer' },
  { id: 68, date: '2025-02-15', category: 'Salary', type: 'income', amount: 5500, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 69, date: '2025-02-20', category: 'Shopping', type: 'expense', amount: 750, description: 'Accessories', paymentMethod: 'Credit Card' },
  { id: 70, date: '2025-02-25', category: 'Health', type: 'expense', amount: 280, description: 'Doctor Visit', paymentMethod: 'Card' },

  // March 2025
  { id: 71, date: '2025-03-05', category: 'Food', type: 'expense', amount: 520, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 72, date: '2025-03-10', category: 'Entertainment', type: 'expense', amount: 300, description: 'Events', paymentMethod: 'Credit Card' },
  { id: 73, date: '2025-03-15', category: 'Salary', type: 'income', amount: 5500, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 74, date: '2025-03-20', category: 'Transport', type: 'expense', amount: 200, description: 'Fuel', paymentMethod: 'Cash' },
  { id: 75, date: '2025-03-25', category: 'SIP', type: 'income', amount: 2000, description: 'Monthly SIP Return', paymentMethod: 'Bank Transfer' },

  // April 2025
  { id: 76, date: '2025-04-05', category: 'Food', type: 'expense', amount: 530, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 77, date: '2025-04-10', category: 'Education', type: 'expense', amount: 1200, description: 'Online Course', paymentMethod: 'Credit Card' },
  { id: 78, date: '2025-04-15', category: 'Salary', type: 'income', amount: 5500, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 79, date: '2025-04-20', category: 'Travel', type: 'expense', amount: 2500, description: 'Trip', paymentMethod: 'Credit Card' },
  { id: 80, date: '2025-04-25', category: 'Health', type: 'expense', amount: 350, description: 'Gym', paymentMethod: 'Card' },

  // May 2025
  { id: 81, date: '2025-05-05', category: 'Food', type: 'expense', amount: 510, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 82, date: '2025-05-10', category: 'Insurance', type: 'expense', amount: 850, description: 'Insurance Premium', paymentMethod: 'Online' },
  { id: 83, date: '2025-05-15', category: 'Salary', type: 'income', amount: 5500, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 84, date: '2025-05-20', category: 'Utilities', type: 'expense', amount: 220, description: 'Bills', paymentMethod: 'Online' },
  { id: 85, date: '2025-05-28', category: 'Shopping', type: 'expense', amount: 650, description: 'Clothes', paymentMethod: 'Credit Card' },

  // June 2025
  { id: 86, date: '2025-06-05', category: 'Food', type: 'expense', amount: 540, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 87, date: '2025-06-10', category: 'Entertainment', type: 'expense', amount: 400, description: 'Concert', paymentMethod: 'Credit Card' },
  { id: 88, date: '2025-06-15', category: 'Salary', type: 'income', amount: 5500, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 89, date: '2025-06-20', category: 'Transport', type: 'expense', amount: 230, description: 'Fuel', paymentMethod: 'Cash' },
  { id: 90, date: '2025-06-25', category: 'EMI', type: 'expense', amount: 2000, description: 'Car EMI', paymentMethod: 'Bank Transfer' },

  // July 2025
  { id: 91, date: '2025-07-05', category: 'Food', type: 'expense', amount: 560, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 92, date: '2025-07-10', category: 'Health', type: 'expense', amount: 500, description: 'Medical', paymentMethod: 'Card' },
  { id: 93, date: '2025-07-15', category: 'Salary', type: 'income', amount: 5500, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 94, date: '2025-07-20', category: 'Shopping', type: 'expense', amount: 800, description: 'Clothes', paymentMethod: 'Credit Card' },
  { id: 95, date: '2025-07-25', category: 'Entertainment', type: 'expense', amount: 350, description: 'Games', paymentMethod: 'Card' },

  // August 2025
  { id: 96, date: '2025-08-05', category: 'Food', type: 'expense', amount: 550, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 97, date: '2025-08-10', category: 'Rent', type: 'expense', amount: 1500, description: 'Monthly Rent', paymentMethod: 'Bank Transfer' },
  { id: 98, date: '2025-08-15', category: 'Salary', type: 'income', amount: 5500, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 99, date: '2025-08-20', category: 'Travel', type: 'expense', amount: 3000, description: 'Vacation', paymentMethod: 'Credit Card' },
  { id: 100, date: '2025-08-25', category: 'Education', type: 'expense', amount: 600, description: 'Books', paymentMethod: 'Card' },

  // September 2025
  { id: 101, date: '2025-09-05', category: 'Food', type: 'expense', amount: 520, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 102, date: '2025-09-10', category: 'Entertainment', type: 'expense', amount: 350, description: 'Movies', paymentMethod: 'Credit Card' },
  { id: 103, date: '2025-09-15', category: 'Salary', type: 'income', amount: 5500, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 104, date: '2025-09-20', category: 'Transport', type: 'expense', amount: 210, description: 'Fuel', paymentMethod: 'Cash' },
  { id: 105, date: '2025-09-25', category: 'SIP', type: 'income', amount: 2000, description: 'Monthly SIP Return', paymentMethod: 'Bank Transfer' },

  // October 2025
  { id: 106, date: '2025-10-05', category: 'Food', type: 'expense', amount: 530, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 107, date: '2025-10-10', category: 'Shopping', type: 'expense', amount: 950, description: 'Diwali Shopping', paymentMethod: 'Credit Card' },
  { id: 108, date: '2025-10-15', category: 'Salary', type: 'income', amount: 5500, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 109, date: '2025-10-20', category: 'Health', type: 'expense', amount: 400, description: 'Medical', paymentMethod: 'Card' },
  { id: 110, date: '2025-10-25', category: 'EMI', type: 'expense', amount: 2000, description: 'Car EMI', paymentMethod: 'Bank Transfer' },

  // November 2025
  { id: 111, date: '2025-11-05', category: 'Food', type: 'expense', amount: 540, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 112, date: '2025-11-10', category: 'Entertainment', type: 'expense', amount: 300, description: 'Events', paymentMethod: 'Credit Card' },
  { id: 113, date: '2025-11-15', category: 'Salary', type: 'income', amount: 5500, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 114, date: '2025-11-20', category: 'Insurance', type: 'expense', amount: 900, description: 'Insurance', paymentMethod: 'Online' },
  { id: 115, date: '2025-11-25', category: 'Utilities', type: 'expense', amount: 250, description: 'Bills', paymentMethod: 'Online' },

  // December 2025
  { id: 116, date: '2025-12-05', category: 'Food', type: 'expense', amount: 600, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 117, date: '2025-12-10', category: 'Shopping', type: 'expense', amount: 2200, description: 'Christmas', paymentMethod: 'Credit Card' },
  { id: 118, date: '2025-12-15', category: 'Salary', type: 'income', amount: 5500, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 119, date: '2025-12-20', category: 'Travel', type: 'expense', amount: 3500, description: 'Holiday', paymentMethod: 'Credit Card' },
  { id: 120, date: '2025-12-25', category: 'Entertainment', type: 'expense', amount: 500, description: 'Parties', paymentMethod: 'Card' },

  // 2026 Data (Jan - Apr, current year)
  // January 2026
  { id: 121, date: '2026-01-05', category: 'Food', type: 'expense', amount: 500, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 122, date: '2026-01-10', category: 'Transport', type: 'expense', amount: 240, description: 'Fuel', paymentMethod: 'Cash' },
  { id: 123, date: '2026-01-15', category: 'Salary', type: 'income', amount: 6000, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 124, date: '2026-01-20', category: 'Entertainment', type: 'expense', amount: 380, description: 'Events', paymentMethod: 'Credit Card' },
  { id: 125, date: '2026-01-28', category: 'Savings', type: 'income', amount: 2500, description: 'Bonus', paymentMethod: 'Bank Transfer' },

  // February 2026
  { id: 126, date: '2026-02-05', category: 'Food', type: 'expense', amount: 520, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 127, date: '2026-02-10', category: 'Rent', type: 'expense', amount: 1500, description: 'Monthly Rent', paymentMethod: 'Bank Transfer' },
  { id: 128, date: '2026-02-15', category: 'Salary', type: 'income', amount: 6000, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 129, date: '2026-02-20', category: 'Shopping', type: 'expense', amount: 850, description: 'Clothes', paymentMethod: 'Credit Card' },
  { id: 130, date: '2026-02-25', category: 'Health', type: 'expense', amount: 350, description: 'Checkup', paymentMethod: 'Card' },

  // March 2026
  { id: 131, date: '2026-03-05', category: 'Food', type: 'expense', amount: 540, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 132, date: '2026-03-10', category: 'Entertainment', type: 'expense', amount: 320, description: 'Movies', paymentMethod: 'Credit Card' },
  { id: 133, date: '2026-03-15', category: 'Salary', type: 'income', amount: 6000, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 134, date: '2026-03-20', category: 'Transport', type: 'expense', amount: 220, description: 'Fuel', paymentMethod: 'Cash' },
  { id: 135, date: '2026-03-25', category: 'SIP', type: 'income', amount: 2000, description: 'Monthly SIP', paymentMethod: 'Bank Transfer' },

  // April 2026
  { id: 136, date: '2026-04-05', category: 'Food', type: 'expense', amount: 530, description: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 137, date: '2026-04-10', category: 'Education', type: 'expense', amount: 1300, description: 'Course', paymentMethod: 'Credit Card' },
  { id: 138, date: '2026-04-15', category: 'Salary', type: 'income', amount: 6000, description: 'Monthly Salary', paymentMethod: 'Bank Transfer' },
  { id: 139, date: '2026-04-20', category: 'Travel', type: 'expense', amount: 2800, description: 'Trip', paymentMethod: 'Credit Card' },
  { id: 140, date: '2026-04-25', category: 'Health', type: 'expense', amount: 400, description: 'Gym', paymentMethod: 'Card' },
];
