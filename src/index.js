import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import blogReducer from './blog/reducers';
import AppRoute from './routes';

// import { firestore as db } from './firebaseInit';
const rootReducer = combineReducers({
  blog: blogReducer,
});

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <AppRoute />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

// db
//   .collection('posts')
//   .get()
//   .then(querySnapshot => {
//     querySnapshot.forEach(doc => {
//       console.log('doc', doc.data());
//     });
//   });
