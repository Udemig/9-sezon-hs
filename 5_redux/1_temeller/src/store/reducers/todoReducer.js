import ActionTypes from '../actionTypes';

/*
 ! reducer
 * state'in nasıl değişceğine karar verir.
 * reducer normal bir fonksiyondur.
 * ve bu fonksiyon iki parametre alır
 * > state: reducer'da tutulan verilerin son durumu
 * > action: veirlerin nasıl dğeişiceğini ifade eden nesne
 
 * useReducer'dan farklı olarak initialStat'i state parametresine varsayılan değer olarak veiririz
*/

const initialState = {
  todos: [],
  isDarkMode: true,
  x: '',
  y: '',
};

const todoReducer = (state = initialState, action) => {
  // aksiyonun type'ına göre gerekli güncellemeyi yap
  switch (action.type) {
    // eğer ADD aksiyonu çalışırsa:
    case ActionTypes.ADD:
      return {
        ...state, // state'deki diğer değerleri muhafaza et
        todos: state.todos.concat(action.payload), // ekle
      };

    // eğer DELETE askiyonu çalışırse:
    case ActionTypes.DELETE:
      // diziden silincek elemanı kaldır
      const filtred = state.todos.filter((i) => i.id !== action.payload);
      // reducer'da tutulan todos değerini güncelle
      return { ...state, todos: filtred };

    // eğer UPDATE aksiyonu çalışırsa:
    case ActionTypes.UPDATE:
      // dizisdeki eski elemanın yerine action payload ile gelen elemanı koy
      const updatedArrr = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );

      // reducer'da tutulan todosu güncelle
      return { ...state, todos: updatedArrr };

    // eğer SET aksiyonu çalışsırsa:
    case ActionTypes.SET:
      return { ...state, todos: action.payload };

    // eğer aksiyon yukarıdakilerden biri değilse state'i koru
    default:
      return state;
  }
};

export default todoReducer;
