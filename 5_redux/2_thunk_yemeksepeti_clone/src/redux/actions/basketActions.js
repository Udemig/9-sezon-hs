import ActionTypes from './../actionTypes';
import api from './../../utils/api';
import { v4 } from 'uuid';
import axios from 'axios';

// 1) Sepetteki Elamanları Al
export const getCart = () => (dispatch) => {
  dispatch({
    type: ActionTypes.CART_LOADING,
  });

  api
    .get(`/cart`)
    .then((res) =>
      dispatch({
        type: ActionTypes.CART_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: ActionTypes.CART_ERROR,
        payload: err.message,
      });
    });
};

// 2) Sepete Yeni Eleman Ekleme
export const addToBasket = (product, rest) => (dispatch) => {
  // a) sepete eklenicek olan ürünnü bilgilerini belirle
  const newItem = {
    id: v4(),
    productId: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantName: rest.name,
    amount: 1,
  };

  // b) elemanı api'a ekle
  api
    .post(`/cart`, newItem)
    // c) başarılı olursa reducer'a haber ver ve bildirim gönder
    .then(() =>
      dispatch({
        type: ActionTypes.ADD_TO_CART,
        payload: newItem,
      })
    );
};

// 3) Sepetteki Elemanı Güncelle (Miktar Arttırma / Azaltma)
export const updateItem = (id, newAmount) => (dispatch) => {
  //a) api'da elemanı güncelle
  api
    .patch(`/cart/${id}`, { amount: newAmount })
    //b) istek başarılı olursa reducer'a haber ver
    .then((res) => {
      dispatch({
        type: ActionTypes.UPDATE_CART,
        payload: res.data, // güncel item
      });
    });
};

// 4) Sepetten ELemanı Tamamen Kaldır
export const deleteItem = (id) => (dispatch) => {
  api.delete(`/cart/${id}`).then(() =>
    dispatch({
      type: ActionTypes.DELETE_FROM_CART,
      payload: id,
    })
  );
};
