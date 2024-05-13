import { configureStore } from '@reduxjs/toolkit';
import covid from './covidSlice';

export default configureStore({ reducer: covid });
