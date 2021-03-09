import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Theme } from './utils';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${({theme}) => theme.colors.primary};
    height: 200vh;
    
  }

`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyle/>
        {children}
      </>
    </ThemeProvider>
  )
}

export default Layout;
