import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import commentsReducer from '../reducers/commentsReducer';

export default function configureStore(initialState) {
  return createStore(
    commentsReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f  // eslint-disable-line
    )
  );
}
