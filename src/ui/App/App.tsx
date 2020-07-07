import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// eslint-disable-next-line no-restricted-imports
import { appContainer } from 'ioc/AppContainer';

import { THEME } from 'ui/common/consts/theme';
import { GlobalStyles } from 'ui/common/styles/Global';

import { DependencyProvider } from 'ui/common/hooks/DependencyProvider/DependencyProvider';
import { Router } from 'ui/common/routing/router';
import { MockButtonWidget } from 'ui/common/widgets/MockButtonWidget/MockButtonWidget';

export const App = () => (
  <DependencyProvider container={appContainer}>
    <ThemeProvider theme={THEME}>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          {Router.map(({ path, component }) => (
            <Route key={path} exact path={path} component={component} />
          ))}
        </Switch>
      </BrowserRouter>
      <MockButtonWidget />
    </ThemeProvider>
  </DependencyProvider>
);
