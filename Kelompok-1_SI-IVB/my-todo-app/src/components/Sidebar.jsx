import React from 'react';
import { FaPlus, FaSearch, FaRegCalendarCheck, FaRegCalendarAlt, FaTags, FaCheckCircle, FaHome, FaSun, FaMoon } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar({ setActiveView, activeView, toggleTheme, currentTheme, setShowAddTaskFormModal }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="user-profile">
          <span className="user-avatar">📝</span>
          <span className="user-name">To Do App</span>
        </div>
      </div>


      <nav className="sidebar-nav">
        <ul>
          <li className={activeView === 'search' ? 'active' : ''} onClick={() => setActiveView('search')}>
            <FaSearch /> Search
          </li>
          <li className={activeView === 'today' ? 'active' : ''} onClick={() => setActiveView('today')}>
            <FaRegCalendarCheck /> Today <span className="item-count">1</span> {/* */}
          </li>
          <li className={activeView === 'upcoming' ? 'active' : ''} onClick={() => setActiveView('upcoming')}>
            <FaRegCalendarAlt /> Upcoming
          </li>
          <li className={activeView === 'filters' ? 'active' : ''} onClick={() => setActiveView('filters')}>
            <FaTags /> Filters & Labels
          </li>
          <li className={activeView === 'completed' ? 'active' : ''} onClick={() => setActiveView('completed')}>
            <FaCheckCircle /> Completed
          </li>
        </ul>
        <div className="my-projects-section">
          <h3>My Projects</h3>
          <ul>
            <li className={activeView === 'my-projects' ? 'active' : ''} onClick={() => setActiveView('my-projects')}>
              <FaHome /> Home <span className="item-count">5</span> {/* */}
            </li>
          </ul>
          <button className="theme-toggle-btn" onClick={toggleTheme}>
          {currentTheme === 'light' ? <FaMoon /> : <FaSun />}
          <span>{currentTheme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
        </button>
        </div>
      </nav>

    </aside>
  );
}

export default Sidebar;