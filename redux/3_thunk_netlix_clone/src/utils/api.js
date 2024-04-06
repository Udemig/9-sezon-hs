import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  //  yapıcağımız bütün isteklere eklenicek olan headerlar
  headers: {
    accept: 'application/json',
    // yekilendirme
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
  // bütün api isteklerinde gönderilecek ortak parametre
  params: {
    language: 'tr-TR',
  },
});
