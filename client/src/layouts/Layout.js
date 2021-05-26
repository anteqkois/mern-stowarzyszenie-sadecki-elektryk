import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Theme } from './utils';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700;800;900&display=swap');
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: transparent;
  }
  
  ::-webkit-scrollbar {
      display: none;
  }
  body{
    background-color: ${({ theme }) => theme.colors.primary};
  }

`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
};

export default Layout;
