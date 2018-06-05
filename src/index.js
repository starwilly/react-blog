import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import auth from '@/auth';
import blog from '@/blog';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

// import AppRoute from './routes';
import App from './App';

// import { firestore as db } from './firebaseInit';
const rootReducer = combineReducers({
  blog: blog.reducer,
  auth: auth.reducer,
});

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
