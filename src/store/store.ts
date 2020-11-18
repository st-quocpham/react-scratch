import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

// Combine reducers
// import { combineReducers } from 'redux';
import portalReducer from './slicer/portal';
import boxColorReducer from './slicer/boxColor';
import noteReducer from './slicer/note';

const rootReducer = {
  portal: portalReducer,
  boxColor: boxColorReducer,
  note: noteReducer,
};

// Create store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
