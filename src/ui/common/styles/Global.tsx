import React from 'react';
import { css, Global } from '@emotion/core';

import { THEME } from 'ui/common/consts/theme';

const styles = css`
  ::selection {
    background-color: ${THEME.color.mandy};
    color: ${THEME.color.white};
  }

  body {
    background-color: ${THEME.color.alabaster};
    margin: 0;
    font-family: ${THEME.font.lato}, 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  button {
    outline: none;
    &:hover {
      cursor: pointer;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${THEME.font.oswald}, 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    user-select: none;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const GlobalStyles = () => <Global styles={styles} />;
