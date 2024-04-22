import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// asenkron thunk aksiyonu
// bizden istediği parametreler
// 1) aksiyonun tipi
// 2) aksiyonun payload'ını return eden fonksiyon
export const getUsers = createAsyncThunk('updated/getUsers', async () => {
  // asenkron işlem
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');

  // bu fonksiyon mutlaka aksiyonun payload'ını return etmeli
  return res.data;
});

// Async thunk aksiyonu, askiyonu dispatch ettiğimiz zaman yaptığı isteğin durumana göre otomatik olarak store'a farklı aksiyon dispatch edebilir.

// 1) pending: isteği yaptığı anda bu aksiyonu tetikler
// asenkron işlemin başladığını belirtir

// 2) fulfilled: istek başarılı olursa bu aksiyonı tetikler
// payload kısmı bizin asyncThunk methodunda return ettiğimiz veridir

// 3) rejected: istekte hata oluşursa bu aksiyon tetiklenir
// isteğin error kısmına hata detaylarını ekler
