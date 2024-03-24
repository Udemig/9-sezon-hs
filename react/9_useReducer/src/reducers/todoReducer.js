// başlangıç değeri
export const initialState = {
  todos: [],
  x: '',
  y: '',
  isDarkMode: true,
};

// reducer fonkisyonu
const reducer = (state, action) => {
  // akisyonun tipine göre return edilmesi gerken veriye karar veriyoruz
  switch (action.type) {
    case 'CHANGE_THEME':
      // state'deki değerleri koru isDarkMode mevcut değerinin tersi olsun
      return { ...state, isDarkMode: !state.isDarkMode };

    case 'CREATE':
      return { ...state, todos: state.todos.concat(action.payload) };

    case 'CLEAR':
      return { ...state, todos: [] };

    case 'DELETE':
      // askiyonun payload'ı ile gönderilen id' dışarsındakileri al
      const filtred = state.todos.filter((i) => i.id !== action.payload);
      //  state'i güncell
      return { ...state, todos: filtred };

    default:
      return state;
  }
};

export default reducer;
