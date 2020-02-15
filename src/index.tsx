import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'ui/App/App';

import { appContainer } from 'ioc/AppContainer';

appContainer.init();
ReactDOM.render(<App />, document.getElementById('root'));
