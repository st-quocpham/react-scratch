import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

// Combine reducers
import { combineReducers } from 'redux';
import counterReducer from './slicer/counter';

const rootReducer = combineReducers({
  counter: counterReducer,
});

// Create store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
