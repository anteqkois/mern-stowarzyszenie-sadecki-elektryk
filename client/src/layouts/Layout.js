import { PromiseProvider } from 'mongoose';
import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Theme } from './utils';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: grey;
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
