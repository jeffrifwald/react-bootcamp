import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/comment-app.scss';
import CommentApp from './components/comment-app';
import configureStore from './store/configureStore';

const store = configureStore();

/* global document */
ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.querySelector('.app')
);
