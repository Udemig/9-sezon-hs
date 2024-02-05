// api isteği atan fonksiyonlar bu dosyada olucak

const options = {
  headers: {
    'X-RapidAPI-Key':
      '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
  },
};

// türkiyede popüler müzikleri alır
// ve fonksiyonun çağrıldığı yere döndürür
export const getPopular = async () => {
  const res = await fetch(
    'https://shazam.p.rapidapi.com/charts/track?listId=ip-country-chart-TR&locale=tr',
    options
  );

  const data = await res.json();

  console.log(data);
};
