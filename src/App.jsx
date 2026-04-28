import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ExpenseProvider } from './Context/Expensecontext';
import DashboardPage from './Pages/DashboardPage';
import CalendarPage from './Pages/CalendarPage';
import AnalyticsPage from './Pages/AnalyticsPage';
import ExpenseDetailsPage from './Pages/ExpenseDetailsPage';
import NotFoundPage from './Pages/NotFoundPage';
import Navigation from './Components/Navigation';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ExpenseProvider>
        <div className="app-container">
          <Navigation />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/expenses/:id" element={<ExpenseDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </ExpenseProvider>
    </BrowserRouter>
  );
}

export default App;
                
              
//             </form>
         

//        </div>

//         <div>

//               <div>
//                     <h2>Monthly Income Calendar</h2>

//                   <Calendar
//                     onChange={onChange}
//                     value={selectedDate}
//                     tileContent={renderTileContent}
//                     maxDate={new Date()}
//                   />

//                   <div style={{ marginTop: "10px" }}>
//                     Selected Date: {selectedDate.toDateString()}
//                     <br />
//                     Income: ₹{incomeData[formatDate(selectedDate)] || 0}
//                   </div>
//               </div>
         
//         </div>

//     </div>
//   );
// }



