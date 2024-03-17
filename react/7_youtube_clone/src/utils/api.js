import axios from 'axios';

// yapılan her istekte geçerli olmasını istediğimiz ayarları tanımladığımız bir axios örneği oluşturalım.

const api = axios.create({
  baseURL: 'https://yt-api.p.rapidapi.com',
  params: {
    geo: 'TR',
    lang: 'tr',
  },
  headers: {
    'X-RapidAPI-Key': '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com',
  },
});

export default api;
