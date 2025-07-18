export const getFormattedDate = (date) => {
  return date.toISOString().split('T')[0];
};

export const getRelativeDateLabel = (dateString) => {
  const today = getFormattedDate(new Date());
  const tomorrow = getFormattedDate(new Date(Date.now() + 86400000)); 

  const date = new Date(dateString);
  const options = { month: 'short', day: 'numeric' }; 
  const formattedDate = date.toLocaleDateString('en-US', options);

  if (dateString === today) {
    return `${formattedDate} - Today`;
  } else if (dateString === tomorrow) {
    return `${formattedDate} - Tomorrow`;
  } else {
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    return `${formattedDate} - ${dayOfWeek}`;
  }
};

export const getMonthYearLabel = (date) => {
  const options = { month: 'long', year: 'numeric' }; 
  return date.toLocaleDateString('en-US', options);
};