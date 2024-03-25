// Projede kullanılan aksiyon tipleri string şeklinde tanımladğından dikkay dağınıklığı sonucu oluşabilecek ve tespit etmesi zaman ahataların önüne geçmek için tipleri bir nesne içerisnde tanımlıyıcaz.

// Nesne şeklinde tanımladığımız için artık oto tmamalalama çzelliği sayesidne harf yazım ahtalraından büyük oranda kurtuluyoruz

// 1. YÖNTEM
const ActionTypes = {
  ADD: 'ADD',
  DELETE: 'DELETE',
  UPDATE: 'UPDATE',
  SET: 'SET',
};

export default ActionTypes;

// 2. YÖNTEM
export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const UPDATE = 'UPDATE';
