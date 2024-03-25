//! Oksiyon Nesnesi Oluşturan Fonksiyon
// payload değeri dinamk olucağı için fonksiyonları tercih ettik.
// ve payload değerini parmetre olarak aldık
// bu fonksiyonlar çağrıldığında bir asksiyon nesnesi döndürüyor
// bileşen içerisndeki dispatch alarındaki kodları kısaltıp daha okunabilir yapıyoruz

import ActionTypes from '../actionTypes';

export const deleteTodo = (payload) => {
  return {
    type: ActionTypes.DELETE,
    payload,
  };
};

export const updateTodo = (payload) => ({
  type: ActionTypes.UPDATE,
  payload,
});

export const addTodo = (payload) => ({
  type: ActionTypes.ADD,
  payload,
});

export const setTodos = (payload) => ({
  type: ActionTypes.SET,
  payload,
});
