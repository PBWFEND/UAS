import React, { useState, useEffect } from 'react';
import MainHeader from './MainHeader';
import ItemList from './ItemList';
import FormInput from './FormInput';
import { getFormattedDate, getRelativeDateLabel } from '../utils/dateUtils';
import './MainContent.css';

function MainContent({ todos, addTodo, toggleDone, deleteTodo, activeView, getFilteredTodos }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState(getFormattedDate(new Date()));

  useEffect(() => {
    if (activeView !== 'upcoming' && activeView !== 'today' && selectedDate !== null) {
      setSelectedDate(null);
    } else if ((activeView === 'upcoming' || activeView === 'today') && !selectedDate) {
      setSelectedDate(getFormattedDate(new Date()));
    }
  }, [activeView, selectedDate]); 


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDateSelect = (dateString) => {
    setSelectedDate(dateString);
  };

  const handleTodayClick = () => {
    setSelectedDate(getFormattedDate(new Date()));
  };

  const filteredTodos = getFilteredTodos(activeView === 'upcoming' ? selectedDate : null);

  const filteredTodosBySearch = filteredTodos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderTasksByView = () => {
    if (activeView === 'upcoming') {
      if (selectedDate && searchTerm === '') {
        const tasksForSelectedDate = filteredTodosBySearch;
        const dateLabel = getRelativeDateLabel(selectedDate);

        if (tasksForSelectedDate.length === 0) {
          return (
            <div className="task-date-group">
              <h3>{dateLabel}</h3>
              <p className="no-items-message">No tasks for this date.</p>
              <div className="add-task-inline">
                <FormInput
                  addTodo={(title) => addTodo(title, selectedDate)}
                  placeholder="Add task for this date..."
                  isInline={true}
                />
              </div>
            </div>
          );
        }

        return (
          <div className="task-date-group">
            <h3>{dateLabel}</h3>
            <ItemList todos={tasksForSelectedDate} toggleDone={toggleDone} deleteTodo={deleteTodo} />
            <div className="add-task-inline">
              <FormInput
                addTodo={(title) => addTodo(title, selectedDate)}
                placeholder="Add task for this date..."
                isInline={true}
              />
            </div>
          </div>
        );
      } else {
        const groupedForDisplay = {};
        filteredTodosBySearch.forEach(todo => {
          const dateKey = todo.dueDate;
          if (!groupedForDisplay[dateKey]) {
            groupedForDisplay[dateKey] = [];
          }
          groupedForDisplay[dateKey].push(todo);
        });

        const dates = Object.keys(groupedForDisplay).sort();

        if (dates.length === 0) {
          return <p className="no-tasks-message">No upcoming tasks or none matching your search.</p>;
        }

        return dates.map(dateKey => {
          const tasksForDate = groupedForDisplay[dateKey];
          const dateLabel = getRelativeDateLabel(dateKey);

          return (
            <div key={dateKey} className="task-date-group">
              <h3>{dateLabel}</h3>
              <ItemList todos={tasksForDate} toggleDone={toggleDone} deleteTodo={deleteTodo} />
              <div className="add-task-inline">
                <FormInput
                  addTodo={(title) => addTodo(title, dateKey)}
                  placeholder="Add task"
                  isInline={true}
                />
              </div>
            </div>
          );
        });
      }
    } else if (activeView === 'filters') { 
        if (filteredTodosBySearch.length === 0) {
            return <p className="no-tasks-message">No tasks found for Filters & Labels or matching your search.</p>;
        }
        return (
            <section className="task-section">
                <h2>Filters & Labels</h2>
                <ItemList todos={filteredTodosBySearch} toggleDone={toggleDone} deleteTodo={deleteTodo} />
                <div className="add-task-inline">
                   <FormInput addTodo={addTodo} placeholder="Add a new task..." isInline={true} />
                </div>
            </section>
        );
    }
    else {
      if (filteredTodosBySearch.length === 0) {
        return <p className="no-tasks-message">No tasks found for this view or matching your search.</p>;
      }
      return (
        <section className="task-section">
          <h2>{activeView === 'my-projects' ? 'My Projects' : activeView.charAt(0).toUpperCase() + activeView.slice(1)}</h2>
          <ItemList todos={filteredTodosBySearch} toggleDone={toggleDone} deleteTodo={deleteTodo} />
          <div className="add-task-inline">
             <FormInput addTodo={addTodo} placeholder="Add a new task..." isInline={true} />
          </div>
        </section>
      );
    }
  };

  return (
    <main className="main-content">
      <MainHeader
        activeView={activeView}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onDateSelect={handleDateSelect}
        selectedDate={selectedDate}
        onTodayClick={handleTodayClick}
      />

      <div className="tasks-display-area">
        {renderTasksByView()}
        {todos.length === 0 && searchTerm === '' && (activeView === 'upcoming' || activeView === 'today' || activeView === 'my-projects' || activeView === 'filters') && (
          <p className="no-tasks-message">Your to-do list is empty. Add a new task!</p>
        )}
        {todos.length > 0 && filteredTodos.length > 0 && filteredTodosBySearch.length === 0 && searchTerm !== '' && (
            <p className="no-tasks-message">No tasks matching your search in this view.</p>
        )}
      </div>
    </main>
  );
}

export default MainContent;