// Components/DarkModeButton.js
import React from 'react';
import { useDarkMode } from '../Hooks/DarkModeContext';

const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} style={{ padding: '10px', backgroundColor: 'black', border: 'none', color: 'white', borderRadius: '10px' }}>
      {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
    </button>
  );
};

export default DarkModeButton;
