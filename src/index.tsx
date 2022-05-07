import React from 'react';
import ReactDOM from 'react-dom';
import { store } from '@store/index';
import { Provider } from 'react-redux';
import 'normalize.css';
import '@css/index.scss';
import App from '@src/App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
