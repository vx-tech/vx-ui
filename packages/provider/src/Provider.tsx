/* eslint-disable max-len */
import * as React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '@vx-ui/theme';

interface IProvider {
  children: React.ReactNode;
}

const GlobalStyles = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    box-sizing: border-box;
    padding: 0;
    margin: 0
  }

  html {
    font-family: 'Montserrat', sans-serif;
  }
  a {
    text-decoration: none;
  }
`;

export const VxuiProvider = ({ children }: IProvider) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
