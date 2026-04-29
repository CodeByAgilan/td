import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ExpenseProvider } from './Context/Expensecontext';
import SimpleDashboard from './Pages/SimpleDashboard';
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
            <Route path="/" element={<SimpleDashboard />} />
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

