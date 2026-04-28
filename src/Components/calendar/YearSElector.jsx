import React from 'react';
import { useExpenseContext } from '../../Context/Expensecontext';
import { getCurrentYear, getAvailableMonths } from '../../utils/dateHelpers';
import './YearSelector.css';

const YearSelector = () => {
  const { selectedYear, setSelectedYear, selectedMonth, setSelectedMonth } = useExpenseContext();

  const currentYear = getCurrentYear();
  const years = [currentYear - 2, currentYear - 1, currentYear, currentYear + 1];

  const handleYearChange = (year) => {
    setSelectedYear(year);
    const availableMonths = getAvailableMonths(year);
    if (selectedMonth >= availableMonths) {
      setSelectedMonth(availableMonths - 1);
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
