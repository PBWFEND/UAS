import React from 'react';
import { FaChevronLeft, FaChevronRight, FaRegCalendarAlt } from 'react-icons/fa';
import { getFormattedDate, getMonthYearLabel } from '../utils/dateUtils';
import SearchFilter from './SearchFilter';
import './MainHeader.css';

function MainHeader({ activeView, searchTerm, onSearchChange, onDateSelect, selectedDate, onTodayClick }) {
  const today = getFormattedDate(new Date());
  const currentDate = new Date();
  const daysInWeek = [];

  let startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - 3);

  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    daysInWeek.push(date);
  }

  const handleConnectCalendar = () => {
    alert("Simulating 'Connect Calendar' feature. In a real app, this would open a calendar integration flow!");
  };

  return (
    <header className="main-header">
      <div className="main-header-top">
        <h1 className="view-title">{activeView.charAt(0).toUpperCase() + activeView.slice(1)}</h1>
        <div className="header-actions">
          {activeView === 'upcoming' && (
            <button className="today-button" onClick={onTodayClick}>
              Today
            </button>
          )}
          <button className="connect-calendar-btn" onClick={handleConnectCalendar}>
            <FaRegCalendarAlt /> Connect calendar
          </button>
        </div>
      </div>

      {activeView === 'upcoming' && (
        <div className="calendar-strip">
          <div className="month-selector">
            <span className="month-label">{getMonthYearLabel(currentDate)}</span>
            <div className="nav-arrows">
              <FaChevronLeft className="arrow-icon" />
              <FaChevronRight className="arrow-icon" />
            </div>
          </div>
          <div className="day-selector">
            {daysInWeek.map((date) => {
              const dayNum = date.getDate();
              const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
              const dateString = getFormattedDate(date);
              const isActive = dateString === selectedDate;
              const isTodayInStrip = dateString === today;

              return (
                <div
                  key={dateString}
                  className={`day-item ${isActive ? 'active' : ''} ${isTodayInStrip ? 'today-in-strip' : ''}`}
                  onClick={() => onDateSelect(dateString)}
                >
                  <span className="day-name">{dayName}</span>
                  <span className="day-num">{dayNum}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="header-search">
        <SearchFilter searchTerm={searchTerm} onSearchChange={onSearchChange} />
      </div>
    </header>
  );
}

export default MainHeader;