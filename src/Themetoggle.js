import React from 'react';

function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle;