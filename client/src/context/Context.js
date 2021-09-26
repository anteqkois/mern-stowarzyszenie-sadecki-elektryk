import React, { useState, useEffect } from 'react';

export const WidthDeviceContext = React.createContext();
export const WidthThemeContext = React.createContext();

export const WidthDeviceProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    function handleMenuChange(e) {
      // Check if the media query is true

      if (e.matches) {
        isMobile === true && setIsMobile(false);
      } else {
        isMobile === false && setIsMobile(true);
      }
    }
    // Register event listener
    mediaQuery.addListener(handleMenuChange);
    // Initial check
    handleMenuChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMenuChange);
    };
  }, [isMobile]);

  return (
    <WidthDeviceContext.Provider
      value={{
        isMobile: isMobile,
      }}
    >
      {children}
    </WidthDeviceContext.Provider>
  );
};

const getFromDevice = () => localStorage.setItem('darkMode', matchMedia('(prefers-color-scheme: dark)').matches);
const getFromLocalStorage = () => {
  localStorage.getItem('darkMode') === null && getFromDevice();
  return localStorage.getItem('darkMode') === 'false' ? false : true;
}

export const WidthThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(getFromLocalStorage());
  }, []);

  return (
    <WidthThemeContext.Provider
      value={{
        isDarkMode: isDarkMode,
        setIsDarkMode: setIsDarkMode,
      }}
    >
      {children}
    </WidthThemeContext.Provider>
  );
};

//export const ContextConsumer = WidthDevice.Consumer;
