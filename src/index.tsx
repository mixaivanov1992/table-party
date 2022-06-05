import '@css/index.scss';
import 'normalize.css';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import App from '@src/App';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
