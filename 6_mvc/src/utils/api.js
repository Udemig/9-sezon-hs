import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3090',
});

export default api;
