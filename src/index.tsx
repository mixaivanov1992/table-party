import React from 'react';
import ReactDOM from 'react-dom';
import { store } from '@store/index';
import { Provider } from 'react-redux';
import '@css/index.scss';
import AppContainer from '@src/AppContainer';

ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
  document.getElementById('root')
);
