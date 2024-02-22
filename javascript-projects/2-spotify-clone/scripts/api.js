// api isteği atan fonksiyonlar bu dosyada olucak

const options = {
  headers: {
    'X-RapidAPI-Key': '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
  },
};

// api işlemlerini yöneticek olan class
export default class API {
  // kurucu method
  constructor() {
    this.songs = [];
  }

  // türkeiyedeki popüler müzikleri alır
  async getPopular() {
    // api isteği at
    const res = await fetch(
      'https://shazam.p.rapidapi.com/charts/track?listId=ip-country-chart-TR&locale=tr',
      options
    );

    // gelen veriyi işle
    const data = await res.json();

    // class'ta tanımlanan songs değişkenine aktar
    this.songs = data.tracks;
  }

  // aratılan kelimeye uygun şarkıları al
  async searchMusic(query) {
    // api isteği at
    const res = await fetch(
      `https://shazam.p.rapidapi.com/search?term=${query}&locale=tr`,
      options
    );

    // gelen cevabı işle
    const data = await res.json();

    // gelen cevabın formatını değiştir
    const formatted = data.tracks.hits.map((song) => {
      return song.track;
    });

    // gelen veriyi değişkene aktar
    this.songs = formatted;
  }
}
