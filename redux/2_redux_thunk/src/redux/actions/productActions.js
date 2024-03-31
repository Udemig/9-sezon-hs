// Thunk Aksiyonu
import api from './../../utils/api';
import ActionTypes from './../actionTypes';

export const getProducts = (restId) => (dispatch) => {
  // reducer'a yüklenmenin başladığını bildiryoruz
  dispatch({
    type: ActionTypes.PRODUCT_LOADING,
  });

  // api isteği atılır
  api
    .get(`/products?restaurantId=${restId}`)
    // istek başarılı olursa reducer'a veileri gönderiyoruz
    .then((res) =>
      dispatch({
        type: ActionTypes.PRODUCT_SUCCESS,
        payload: res.data,
      })
    )
    // istek başarısız olursa reducer'a hata mesajını gönderiyoruz
    .catch((err) => {
      dispatch({
        type: ActionTypes.PRODUCT_ERROR,
        payload: err.message,
      });
    });
};
