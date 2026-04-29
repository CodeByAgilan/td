export default function DashboardPage() {
  return null;
}

//       <div className="overview-section">
//         <div className="overview-card income-card">
//           <div className="card-icon"></div>
//           <div className="card-content">
//             <span className="card-label">Total Income</span>
//             <span className="card-amount">₹{totalIncome.toFixed(2)}</span>
//           </div>
//         </div>

//         <div className="overview-card expense-card">
//           <div className="card-icon"></div>
//           <div className="card-content">
//             <span className="card-label">Total Expenses</span>
//             <span className="card-amount">₹{totalExpenses.toFixed(2)}</span>
//           </div>
//         </div>

//         <div className={`overview-card balance-card ${balance >= 0 ? 'positive' : 'negative'}`}>
//           <div className="card-icon"></div>
//           <div className="card-content">
//             <span className="card-label">Remaining Balance</span>
//             <span className="card-amount">₹{balance.toFixed(2)}</span>
//           </div>
//         </div>
//       </div>

//       <div className="budget-section">
//         <h3>Monthly Budget</h3>
//         <div className="budget-input">
//           <label>Budget Limit (₹):</label>
//           <input
//             type="number"
//             value={budgetInput}
//             onChange={handleBudgetChange}
//             min="0"
//             step="50"
//           />
//           <button onClick={handleSetBudget} className="update-btn">Update</button>
//         </div>

//         <div className={`budget-status ${budgetExceeded ? 'exceeded' : 'ok'}`}>
//           <div className="budget-info">
//             <span className="current-month">Current Month Expenses: ₹{monthTotal.toFixed(2)}</span>
//             <span className="budget-limit">Budget: ₹{monthlyBudget.toFixed(2)}</span>
//           </div>
//           {budgetExceeded && (
//             <div className="budget-warning">
//                Budget Exceeded by ₹{(monthTotal - monthlyBudget).toFixed(2)}
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="recent-transactions-section">
//         <h3>Recent Transactions</h3>
        

//         <div className="filter-controls">
//           <div className="filter-group">
//             <label>Type:</label>
//             <div className="filter-buttons">
//               <button 
//                 className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
//                 onClick={() => setFilterType('all')}
//               >
//                 All
//               </button>
//               <button 
//                 className={`filter-btn ${filterType === 'income' ? 'active' : ''}`}
//                 onClick={() => setFilterType('income')}
//               >
//                 Income
//               </button>
//               <button 
//                 className={`filter-btn ${filterType === 'expense' ? 'active' : ''}`}
//                 onClick={() => setFilterType('expense')}
//               >
//                 Expense
//               </button>
//             </div>
//           </div>

//           {categories.length > 0 && (
//             <div className="filter-group">
//               <label>Category:</label>
//               <select 
//                 className="filter-select"
//                 value={filterCategory}
//                 onChange={(e) => setFilterCategory(e.target.value)}
//               >
//                 <option value="all">All Categories</option>
//                 {categories.map(category => (
//                   <option key={category} value={category}>
//                     {category}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           )}
//         </div>

//         <div className="transactions-grid">
//           {recentTransactions.length > 0 ? (
//             recentTransactions.map(transaction => (
//               <ExpenseCard key={transaction.id} expense={transaction} />
//             ))
//           ) : (
//             <div className="empty-state">
//               <span>No transactions match the selected filters.</span>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;











// // export default function Apps() {
// //  return (
// //    <BrowserRouter>
// //      <nav>
// //        <Link to="/">Home</Link> |{" "}
// //        <Link to="/about">About</Link> |{" "}
// //        <Link to="/contact">Contact</Link>
// //        <Link to="/CAL">CalendarGfg</Link>
// //      </nav>

// //      <Routes>
// //        <Route path="/" element={<Home />} />
// //        <Route path="/about" element={<About />} />
// //        <Route path="/contact" element={<Contact />} />
// //        <Route path="/CAL" element={<CalendarGfg/>} />
// //        <Route path="*" element={<Home/>}/>
// //      </Routes>
// //    </BrowserRouter>
// //  );
// // }