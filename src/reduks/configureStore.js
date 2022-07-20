import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
import logger from 'redux-logger';
// import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

// const rootReducer = combineReducers({
//   rockets: rocketsReducer,
// });

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
