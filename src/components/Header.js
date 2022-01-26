import React from 'react';
import '../css/noteslist.css';

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="toggle"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
