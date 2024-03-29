import React, { useState, useEffect } from 'react';

export const ThemeContext = React.createContext();

const getFromDevice = () => localStorage.setItem('darkMode', matchMedia('(prefers-color-scheme: dark)').matches);

const getFromLocalStorage = () => {
  localStorage.getItem('darkMode') === null && getFromDevice();
  return localStorage.getItem('darkMode') === 'false' ? false : true;
}

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(getFromLocalStorage());
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode: isDarkMode,
        setIsDarkMode: setIsDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};