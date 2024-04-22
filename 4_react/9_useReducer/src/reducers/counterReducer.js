/*
 * reducer: useReducer ile yönetilen state'in nasıl değişeceğine karar veren fonksiyon

 * aldığı parametreler:
 * >> state'in son hali
 * >> aldığı action (emir / eylem)
 
 * reducer fonksiyonu gelen aksiyona göre state'in nasıl değiceğine karar verir.

 * aksiyonları bbileşenleri çerisnden dispatch methodu yardımıyla reducer'a gönderebiliyoruz

 * reducer fonksiyonun return ettiği değer state'İn son hali olur
*/

const reducer = (state, action) => {
  if (action === 'SIFIRLA') {
    return { count: 0 };
  }

  if (action === 'ARTTIR') {
    return { count: state.count + 1 };
  }

  if (action === 'AZALT') {
    return { count: state.count - 1 };
  }
};

export default reducer;
