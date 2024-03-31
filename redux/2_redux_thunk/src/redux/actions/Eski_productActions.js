//! Aksiyon Oluşturan Fonksiyonlar

import axios from 'axios';
import api from '../../utils/api';

// 1) Senkron Olanlar
export const setLoading = () => ({
  type: 'SET_LOADING',
});

export const setProducts = (payload) => ({
  type: 'SET_PRODUCTS',
  payload,
});

export const setError = (payload) => ({
  type: 'SET_ERROR',
  payload,
});

// 2) Asenkron Olanlar

//b) restoran göre ürün verilerini alıp store'a aktaran aksiyon
export const getProducts = () => {
  // getData fonksiyonu asenkron bir fonksiyonu returne etmeli
  return (dispatch) => {
    dispatch(setLoading());

    api
      .get('/products')
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  };
};
