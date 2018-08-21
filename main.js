import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createStore } from 'redux';
import todoApp from './store/reducers/reducers';
import { Provider } from 'react-redux';

const store = createStore(todoApp);
const wrapper = document.getElementById('root');

wrapper
  ? ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, wrapper)
  : false;
