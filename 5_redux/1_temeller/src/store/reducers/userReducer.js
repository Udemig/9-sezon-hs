const initialState = {
  users: [],
  x: '',
  y: '',
};

const userReducer = (state = initialState, action) => {
  // aksiyonun type'ına göre gerekli güncellemeyi yap
  switch (action.type) {
    case 'EKLE':
      return state;

    case 'CIKAR':
      return state;

    // eğer gelen aksiyon yukarıdakilerden biri değilse varolan state'i koru
    default:
      return state;
  }
};

export default userReducer;
