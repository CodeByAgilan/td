import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ExpenseProvider } from './Context/Expensecontext';
import SimpleDashboard from './Pages/SimpleDashboard';
import SimpleCalendar from './Pages/SimpleCalendar';
import Navigation from './Components/Navigation';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ExpenseProvider>
        <div className="app-container">
          <Navigation />
          <Routes>
            <Route path="/" element={<SimpleDashboard />} />
            <Route path="/calendar" element={<SimpleCalendar />} />
          </Routes>
        </div>
      </ExpenseProvider>
    </BrowserRouter>
  );
}

export default App;
//      };


//   const renderTileContent = ({ date, view }) => {
//     if (view === "month") {
//       let dateKey = formatDate(date) || 0;
//       let income = incomeData[dateKey] || 0;



//       return (
//         <div style={{ fontSize: "0.7rem", color: income > 0 ? "green" : "gray" }}>
//           ₹{income}
//         </div>
//       );
//     }
//     return null;
//   };


//   return (
//     <div id="ii">

//        <div id="ModelPopPop">

//             <form action="">
                
              
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



