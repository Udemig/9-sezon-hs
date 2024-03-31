import ActionTypes from '../actionTypes';

const initialState = {
  isLoading: false,
  error: false,
  data: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CART_LOADING:
      return { ...state, isLoading: true };

    case ActionTypes.CART_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case ActionTypes.CART_SUCCESS:
      return { ...state, isLoading: false, error: false, data: action.payload };

    case ActionTypes.ADD_TO_CART:
      return { ...state, data: state.data.concat(action.payload) };

    case ActionTypes.UPDATE_CART:
      // sepet dizisindeki eski elemanı çıkarıp yerine payload ile gelen elemaı koy
      const updatedArr = state.data.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );

      return { ...state, data: updatedArr };

    case ActionTypes.DELETE_FROM_CART:
      // id'sini bildiğimmiz elemanı diziden kaldır
      const filtred = state.data.filter((i) => i.id !== action.payload);

      return { ...state, data: filtred };

    default:
      return state;
  }
};

export default basketReducer;
