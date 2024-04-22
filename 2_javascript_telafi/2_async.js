// Promise: Asenkton opersayonlarda js tarafından kullanılan bir nesnendir.
const getData = async () => {
  console.log('selam 1'); // senkron kod
  console.log('selam 2'); // senkron kod

  // api'a istek at
  // api'dan cevap gelmesini bekle
  const response = await fetch(
    'https://api.orhanaydogdu.com.tr/deprem/kandilli/live'
  );

  // gelen json formatındaki veriyi js verisine çevir
  const data = await response.json();
  const deprem = data.result[0];

  //en son gerçekleşen depremn bilgilerini ekrana bas
  document.write('YER', deprem.title + '<br>');
  document.write('ŞİDDET:', deprem.mag + '<br>');
  document.write('DERİNLİK:', deprem.depth + '<br>');

  return deprem;
};

// Then Catch'i asenkron fonksiyonlar çalıştırdğımızda kullanırız
// Then bloğu fonksiyon görevini başarıyla yerine getirise çalışır ve fonksiyonun döndürğü değeri parametre olarak içinde fonksiyona aktarar
// Catch bloğu fonksiyonun çalışmasında bir hat oluşursa çalışır ve hata bilgilerinin içersindeki fonksiyonu parametre olarak aktarır
getData() // api'dan olumlu cevap alırsak çalışır
  .then((data) => {
    console.log(data);
  })
  // api'dan olumsuz cevap alırsak çalışır
  .catch((error) => {
    console.log(error);
  });
