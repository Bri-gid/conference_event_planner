// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import avReducer from './avSLice';

export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
  },
});
