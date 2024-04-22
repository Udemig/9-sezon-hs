import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import crudReducer from './slices/crudSlice';

// configureStore - createStore farkları
// 1- varsayılan olarak thunk kurulu gelir
// 2- verilen reducer'ları otomatik olarak birleştir
// 3- devtools eklentisi kurlu gelir
export default configureStore({
  reducer: { counterReducer, crudReducer },
});
