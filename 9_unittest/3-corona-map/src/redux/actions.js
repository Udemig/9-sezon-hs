import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { headers } from '../constants';

export const getCountryData = createAsyncThunk(
  'covid/getCountryData',
  async ({ code, query }) => {
    const params = { iso: code, q: query };

    //  isocode'a göre ülkenin covid bilgilerini alana isteği hazırla
    const req1 = axios.get(
      'https://covid-19-statistics.p.rapidapi.com/reports',
      { params, headers }
    );

    // isocode'a göre ülkenin detaylarını alan isteği hazırla
    const req2 = axios.get(
      code
        ? `https://restcountries.com/v3.1/alpha/${code}`
        : `https://restcountries.com/v3.1/name/${query}`
    );

    // iki api isteğinide aynı anda at
    const responses = await Promise.all([req1, req2]);

    // covid verilerinin içerisindeki region nesnesini dağıt
    const covid = {
      ...responses[0].data.data[0],
      ...responses[0].data.data[0].region,
    };

    // gereksiz değerleri kaldır
    delete covid.region;
    delete covid.cities;

    // aksiyonun payload'ı
    return { covid, country: responses[1].data[0] };
  }
);
