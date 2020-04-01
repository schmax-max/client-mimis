import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore as reduxCreateStore } from 'redux';
import rootReducer from './reducers';

import thunkMiddleware from 'redux-thunk';
// import {createLogger} from 'redux-logger';
// const loggerMiddleware = createLogger();




const createStore = () => reduxCreateStore(rootReducer, applyMiddleware(
  thunkMiddleware,
  // loggerMiddleware
));
export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);
