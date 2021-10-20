import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as BumbagProvider } from 'bumbag';
import App from './App';
import { Provider as ReduxProvider } from 'react-redux';
import { Store } from './redux/store';

import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={Store}>
      <BumbagProvider colorMode="dark">
        <App />
      </BumbagProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
