import { useReducer } from 'react';
import counterReducer from '../reducers/counterReducer';

const Counter = () => {
  // başlanıç state'i
  const initialState = {
    count: 0,
  };

  /*
   * useReducer:
   * bir bileşen state yönetimi useState ile birlikte zor bir hale geldiği zaman useReducer'ı tercih ederiz
    
   * Bizden istediği argümanlar:
   * reducer >> state'in nasıl değişeceğine karar veren fonksiyon
   * initialState >> tutucağımız state'in ilk değeri
   
   * Bize döndürdüğü değerler:
   * count >> state'in güncel hali
   * dispatch >> state'i güncellemek için kullandığımız method
   */

  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="d-flex gap-4 align-items-center">
      <button
        onClick={() => dispatch('SIFIRLA')} //
        className="btn btn-secondary"
      >
        Sıfırla
      </button>
      <button
        onClick={() => dispatch('AZALT')} //
        className="btn btn-primary"
      >
        Azalt
      </button>

      <span className="lead fs-1">{state.count}</span>

      <button
        onClick={() => dispatch('ARTTIR')} //
        className="btn btn-success"
      >
        Arttır
      </button>
    </div>
  );
};

export default Counter;
