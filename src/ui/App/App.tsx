import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { THEME } from 'ui/common/consts/theme';
import { GlobalStyles } from 'ui/common/styles/Global';

import logo from 'ui/common/assets/images/logo.svg';

import 'ui/App/App.css';

export const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
};
