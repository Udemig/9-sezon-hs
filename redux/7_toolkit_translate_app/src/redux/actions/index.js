import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';
import { data } from 'autoprefixer';

// asenkron thunk aksiyonu
export const getLanguages = createAsyncThunk(
  'languages/getLanguages',
  async () => {
    // api istğei atılır
    const res = await api.get('/getLanguages');

    // payload return edilir
    return res.data.data.languages;
  }
);

export const translateText = createAsyncThunk(
  'translate/translateText',
  async (p) => {
    // api'a gönderilecek olan parametreleri belirleme
    const params = new URLSearchParams();
    params.set('source_language', p.sourceLang.value);
    params.set('target_language', p.targetLang.value);
    params.set('text', p.text);

    // api'a gönderlicek header'ı belirle
    const headers = {
      'content-type': 'application/x-www-form-urlencoded',
    };

    // api isteğini at
    const res = await api.post('/translate', params, { headers });

    // payload'ı belirle
    return res.data.data;
  }
);
