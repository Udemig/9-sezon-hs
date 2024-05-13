export const headers = {
  'X-RapidAPI-Key': '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
  'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com',
};

export const storeData = {
  isLoading: false,
  error: null,
  data: {
    covid: {
      date: '2023-03-09',
      confirmed: 160433,
      deaths: 2043,
      recovered: 0,
      confirmed_diff: 0,
      deaths_diff: 0,
      recovered_diff: 0,
      last_update: '2023-03-10 04:21:03',
      active: 158390,
      active_diff: 0,
      fatality_rate: 0.0127,
      iso: 'BRA',
      name: 'Brazil',
      province: 'Acre',
      lat: '-9.0238',
      long: '-70.812',
    },
    country: {
      altSpellings: [
        'BR',
        'Brasil',
        'Federative Republic of Brazil',
        'República Federativa do Brasil',
      ],

      flags: {
        png: 'https://flagcdn.com/w320/br.png',
        svg: 'https://flagcdn.com/br.svg',
        alt: "The flag of Brazil has a green field with a large yellow rhombus in the center. Within the rhombus is a dark blue globe with twenty-seven small five-pointed white stars depicting a starry sky and a thin white convex horizontal band inscribed with the national motto 'Ordem e Progresso' across its center.",
      },
    },
  },
};
