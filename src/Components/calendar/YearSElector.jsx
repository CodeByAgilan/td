import React from 'react';
import { useExpenseContext } from '../../Context/Expensecontext';
import { isMonthDisabled } from '../../utils/dateHelpers';
import './YearSelector.css';

const YearSelector = () => {
  const { selectedYear, setSelectedYear, selectedMonth, setSelectedMonth } = useExpenseContext();

  const currentYear = new Date().getFullYear();
  const years = [currentYear - 2, currentYear - 1, currentYear];

  const handleYearChange = (year) => {
    setSelectedYear(year);
    // Reset to valid month if current month is disabled for new year
    if (isMonthDisabled(year, selectedMonth)) {
      setSelectedMonth(0);
    }
  };

  return (
    <div className="year-selector">
      <label>Select Year:</label>
      <div className="year-buttons">
        {years.map(year => (
          <button
            key={year}
            className={`year-btn ${selectedYear === year ? 'active' : ''}`}
            onClick={() => handleYearChange(year)}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YearSelector;
