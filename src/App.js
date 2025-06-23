import React, { useState } from 'react';
import Board from './Board';
import ThemeToggle from './Themetoggle';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', darkMode ? 'light' : 'dark');
  };

  return (
    <div className="app">
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  );
}

export default App;