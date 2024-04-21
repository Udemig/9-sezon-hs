import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { options } from '../../constants';

export const getFlights = createAsyncThunk('flights/getFlights', async () => {
  // 1) api isteği at
  const res = await axios.request(options);

  // 2) gelen veriyi formatla
  // dizi içerisndeki dizileri nesneye çevir
  const formatted = res.data.aircraft.map((item) => ({
    id: item[0],
    code: item[1],
    lat: item[2],
    lng: item[3],
  }));

  // 3) aksiyonun payload'ı olarak formatlanan veriyi ekle
  return formatted;
});
