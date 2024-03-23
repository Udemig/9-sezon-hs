import axios from "axios";

// yapılan her istekte geçerli olmasını istediğimiz ayarları tanımladığımız bir axios örneği oluşturalım.

const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
});

export default api;
