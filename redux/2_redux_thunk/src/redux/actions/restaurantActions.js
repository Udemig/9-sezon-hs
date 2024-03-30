//a) restoran verilerini alıp store'a aktaran asenkron aksiyon
import api from '../../utils/api';
import ActionTypes from '../actionTypes';

export const getRestaurants = () => (dispatch) => {
  dispatch({
    type: ActionTypes.REST_LOADING,
  });

  api
    .get('/restaurants')
    .then((res) =>
      dispatch({
        type: ActionTypes.REST_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.REST_ERROR,
        payload: err.message,
      })
    );
};
