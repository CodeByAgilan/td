

export const formatDate = (year, month, day) => {
  if (typeof year === 'object' && year !== null && year.getFullYear) {
    const d = year;
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const da = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${da}`;
  }
  // If called with year, month, day parameters
  if (typeof year === 'number' && typeof month === 'number' && typeof day === 'number') {
    const monthStr = String(month + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    return `${year}-${monthStr}-${dayStr}`;
  }
  return '';
};

export const getMonthName = (monthIndex) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  return months[monthIndex];
};

export const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};

export const isCurrentMonth = (year, month) => {
  const now = new Date();
  return year === now.getFullYear() && month === now.getMonth();
};

export const isCurrentYear = (year) => {
  return year === new Date().getFullYear();
};

export const getCurrentMonth = () => {
  return new Date().getMonth();
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const getAvailableMonths = (year) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  
  if (year === currentYear) {
    return now.getMonth() + 1;
  }
  return 12;
};

export const isMonthDisabled = (year, month) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  
  if (year > currentYear) return true;
  if (year === currentYear && month > currentMonth) return true;
  return false;
};

export const isDateInFuture = (year, month, day) => {
  const date = new Date(year, month, day);
  return date > new Date();
};
