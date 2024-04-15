import languageReducer from './slices/languageSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: { languageReducer },
});
