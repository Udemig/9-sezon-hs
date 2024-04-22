export const options = {
  method: 'GET',
  url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
  params: {
    bl_lat: '34.395945',
    bl_lng: '24.795437',
    tr_lat: '43.431971',
    tr_lng: '44.980891',
    limit: '300',
  },
  headers: {
    'X-RapidAPI-Key': '590bbb98ebmsh246acde1e679fadp1431f3jsn27f3c5b7de13',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
  },
};

export const dOptions = {
  headers: {
    'X-RapidAPI-Key': '590bbb98ebmsh246acde1e679fadp1431f3jsn27f3c5b7de13',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
  },
};
