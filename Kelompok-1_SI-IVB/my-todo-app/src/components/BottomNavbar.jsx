import React from 'react';
import { FaHome, FaRegCalendarAlt, FaPlus, FaClipboardList } from 'react-icons/fa';
import './BottomNavbar.css';

function BottomNavbar({ setActiveView, activeView, setShowAddTaskFormModal }) {
  const handleAddTaskClick = () => {
    setShowAddTaskFormModal(true);
  };

  return (
    <nav className="bottom-navbar">
      <ul className="bottom-nav-list">
        <li className={activeView === 'my-projects' ? 'active' : ''} onClick={() => setActiveView('my-projects')}>
          <FaHome />
          <span>Home</span>
        </li>
        <li className={activeView === 'upcoming' ? 'active' : ''} onClick={() => setActiveView('upcoming')}>
          <FaRegCalendarAlt />
          <span>Upcoming</span>
        </li>
        <li className="nav-add-task" onClick={handleAddTaskClick}>
          <FaPlus />
        </li>
        <li className={activeView === 'completed' ? 'active' : ''} onClick={() => setActiveView('completed')}>
          <FaClipboardList />
          <span>Completed</span>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNavbar;