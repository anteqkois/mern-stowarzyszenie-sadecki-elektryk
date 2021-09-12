import React,{useContext} from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from './utils';

import { WidthThemeContext } from '../context/Context';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700;800;900&display=swap');
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: transparent;
  }
  ::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 100px;
}

::-webkit-scrollbar
{
  display: none;
  width: 15px;

  ${({ theme }) => theme.media.tablet}{
  display: initial;
  }
}

::-webkit-scrollbar-thumb
{
  border-radius: 100px;
  background-image: ${({ theme }) => theme.colors.gradient};
  box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
}

  body{
    background-color: ${({ theme }) => theme.colors.primary};
    overflow-x: hidden;
    >div{
      min-height: 100vh;
    }
  }

  *:focus{
    outline: dashed 2px green;
    outline-offset: 2px;
    /* outline: dashed 2px ${({ theme }) => theme.colors.accent}; */
  }

`;

const Layout = ({ children }) => {

  const { isDarkMode } = useContext(WidthThemeContext);
  
  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
};

export default Layout;
