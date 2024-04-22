import languageReducer from './slices/languageSlice';
import translateReducer from './slices/translateSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: { languageReducer, translateReducer },
});
