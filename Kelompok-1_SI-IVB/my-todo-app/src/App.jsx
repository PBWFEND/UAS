import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import BottomNavbar from './components/BottomNavbar';
import FormInput from './components/FormInput'; // Pastikan FormInput diimpor jika digunakan di modal
import './App.css';
import { getFormattedDate } from './utils/dateUtils';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [activeView, setActiveView] = useState('upcoming');
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });
  const [showAddTaskFormModal, setShowAddTaskFormModal] = useState(false); 

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    document.body.className = theme + '-theme';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const addTodo = (title, dueDate = getFormattedDate(new Date()), category = 'My Projects') => {
    if (title.trim() === '') {
      alert('Task title cannot be empty!');
      return;
    }
    const newTodo = {
      id: String(Date.now()),
      title,
      isDone: false,
      addedDate: new Date().toISOString(),
      dueDate: dueDate, 
      category: category,
      dueTime: '',
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setShowAddTaskFormModal(false); 
  };

  const toggleDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }
  };

  const getFilteredTodos = (currentSelectedDate = null) => {
    const today = getFormattedDate(new Date());
    let filtered = [];

    switch (activeView) {
      case 'today':
        filtered = todos.filter(todo => todo.dueDate === today);
        break;
      case 'upcoming':
        if (currentSelectedDate) {
          filtered = todos.filter(todo => todo.dueDate === currentSelectedDate);
        } else {
          filtered = todos
            .filter(todo => todo.dueDate >= today)
            .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        }
        break;
      case 'completed':
        filtered = todos.filter(todo => todo.isDone);
        break;
      case 'filters': 
      case 'my-projects':
        filtered = todos.filter(todo => todo.category === 'My Projects'); 
        break;
      case 'search': 
        filtered = todos; 
        break;
      default:
        filtered = todos;
        break;
    }
    return filtered;
  };

  return (
    <div className="app-wrapper">
      <div className="app-layout">
        <Sidebar
          setActiveView={setActiveView}
          activeView={activeView}
          toggleTheme={toggleTheme}
          currentTheme={theme}
          setShowAddTaskFormModal={setShowAddTaskFormModal}
        />
        <MainContent
          todos={todos}
          addTodo={addTodo}
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
          activeView={activeView}
          getFilteredTodos={getFilteredTodos}
        />
        <BottomNavbar
          setActiveView={setActiveView}
          activeView={activeView}
          setShowAddTaskFormModal={setShowAddTaskFormModal}
        />

        {showAddTaskFormModal && (
          <div className="add-task-form-overlay">
            <div className="add-task-form-modal">
              <FormInput
                addTodo={addTodo}
                placeholder="What do you need to do?"
                onCancel={() => setShowAddTaskFormModal(false)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;