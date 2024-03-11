import axios from 'axios';

// axios'un ayarlarını bizim belirlediğimiz bir örneğini oluşturmaya yarar
const api = axios.create({
  // yapılcak olan bütün isteklerin başına ekle
  baseURL: 'https://fakestoreapi.com/',
  timeout: 1000,
});

export default api;
