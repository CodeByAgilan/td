// Date helper utilities

export const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};

export const getMonthName = (month) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[month];
};

export const formatDate = (year, month, day) => {
  const monthStr = String(month + 1).padStart(2, '0');
  const dayStr = String(day).padStart(2, '0');
  return `${year}-${monthStr}-${dayStr}`;
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

export const getCurrentDay = () => {
  return new Date().getDate();
};

export const isMonthDisabled = (year, month) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  // If year is in the future, all months are disabled
  if (year > currentYear) {
    return true;
  }

  // If it's the current year, disable months after current month
  if (year === currentYear && month > currentMonth) {
    return true;
  }

  return false;
};

export const isDateInFuture = (year, month, day) => {
  const today = new Date();
  const checkDate = new Date(year, month, day);
  return checkDate > today;
};

export const getDayOfWeek = (year, month, day) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[new Date(year, month, day).getDay()];
};
