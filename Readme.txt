7.Task: Personal Expense Tracker Dashboard 
Build a Personal Expense Tracker using React that allows users to track their daily financial activities.
Application Architecture
src
├ components
│ ├ layout
│ │ ├ Navbar.jsx
│ │ └ Sidebar.jsx
│ │
│ ├ calendar
│ │ ├ YearSelector.jsx
│ │ ├ MonthGrid.jsx
│ │ ├ CalendarDay.jsx
│ │
│ ├ expenses
│ │ ├ ExpenseFormModal.jsx
│ │ ├ ExpenseList.jsx
│ │ ├ ExpenseCard.jsx
│ │
│ └ common
│ ├ Modal.jsx
│ ├ Loader.jsx
│ └ EmptyState.jsx
├ pages
│ ├ DashboardPage.jsx
│ ├ CalendarPage.jsx
│ ├ AnalyticsPage.jsx
│ ├ ExpenseDetailsPage.jsx
│ └ NotFoundPage.jsx
├ context
│ └ ExpenseContext.jsx
├ utils
│ ├ dateHelpers.js
│ ├ expenseHelpers.js
│ └ categories.js
│
├ App.jsx
└ App.css
Feature 1 — Dashboard Overview

        Create DashboardPage.
        Display:
        • Total income
        • Total expenses
        • Remaining balance
        • Recent transactions

        Example UI:
        Total Income: $5,200
        Total Expenses: $3,450
        Balance: $1,750

        Include quick navigation:
        [Open Calendar]
        [View Analytics]

Feature 2 — Year Selection

        User should be able to select a year.
        Example: Select Year: 2024 | 2025 | 2026
        Rules: When the user selects current year, only show months until the current month.

        Example:
        Current date: March 2026
        Available months:
        Jan
        Feb
        Mar
        Future months should be disabled.

Feature 3 — Calendar View (Month Grid)

        Each month should display a calendar grid of dates.

        Example for March:
        Mar 2026
        1 2 3 4 5 6 7
        8 9 10 11 12 13 14
        15 16 17 18 19 20 21
        22 23 24 25 26 27 28
        29 30 31
        Each date cell should be clickable.

Feature 4 — Add Expense / Income (Popup Modal)
        When a user clicks a date:
        Open a modal popup form.
        Fields:
        Category
        Type (Income / Expense)
        Amount
        Description
        Payment Method
        Example:
        Category: Food
        Type: Expense
        Amount: $25
        Description: Lunch
        Payment Method: UPI

Feature 5 — Expense Categories

        Provide predefined categories.
        Example:
        Food
        Transport
        Shopping
        Rent
        Utilities
        Entertainment
        Health
        Education
        Travel
        Salary
        EMI
        Savings
        SIP
        Insurance
        Categories should be stored in: utils/categories.js
        
Feature 6 — Calendar Indicators
Each date cell should show a summary indicator.
Example:
15 Mar
Income: $200
Expense: $50
and colored indicators:
Green → Income
Red → Expense
Feature 7 — Monthly Summary
At the top of each month show totals.
Example:
March Summary
Income: $2200
Expense: $1800
Balance: $400
Feature 8 — Detailed Expense View
Clicking a date should allow viewing all transactions.
Example:
15 March 2026
Food - $25
Transport - $10
Salary - $200
Feature 9 — Calendar Route
The dashboard should also display a calendar preview widget.
Example: Mini Calendar View
Clicking it should navigate to: /calendar
Feature 10 — Expense Filtering
Allow filters:
Date Range
Category
Type (Income / Expense)
Amount Range
Example:
Filter: Food Expenses
Feature 11 — Search Transactions
Search by:
Description
Category
Amount
Example:
Search: "Lunch"
Feature 12 — Edit / Delete Expenses
Users should be able to:
Edit transaction
Delete transaction
Feature 13 — Expense Context (Global State)
Create: ExpenseContext
Store:
All expenses
Income records
Selected date
Filters
Feature 14 — Data Persistence
Store expenses in: localStorage
Example structure:
{
 "date": "2026-03-15",
 "category": "Food",
 "type": "expense",
 "amount": 25
}
Feature 15 — Budget Limit
Users should be able to set monthly budgets.
Example:
Budget for March: $2000
If exceeded: Budget exceeded in red color
Feature 16 — Routing Structure
/ → DashboardPage
/calendar → CalendarPage
/analytics → AnalyticsPage
/expenses/:id → ExpenseDetailsPage
* → NotFoundPage
Expected UI Flow
Dashboard
↓
Open Calendar
↓
Select Year
↓
Select Month
↓
Click Date
↓
Add Expense / Income
↓
View Monthly Summary
↓
View Analytics
