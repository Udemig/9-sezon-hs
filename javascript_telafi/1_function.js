/*
 Javascript'te bir fonksiyon belirli bir görevi yerine getirmek veya sonuç oluşturmak için yazılan bir kod bloğudur.
 Fonksiyonlar kodumuzu daha modüler hale getirememizi aynı kodu tekrar tekrar yazmak yerine bir kere tanımlayıp sürekli olanak sağlar. Bir fonksiyon , parametreler alabillir ve bir değer döndürebilir.
*/

// Fonksiyon Tanımı ve Parametre Kullanımı
// Fonksiyonların yeniden kullanılabilir olması için parametreleri tanımlıyoruz
function selamla(name) {
  console.log(`Selam ${name}, Hoşgeldin!!`);
}

// Fonksiyon Çağırma
selamla('Mustafa');
selamla('Ali');

// Fonksiyonlarda return kullanımı
function selamla2(name) {
  // her fonksiyonda sadece 1 değer return edilebilir.
  // fonksiyonun returbn satırı çalıştığı anda fonksiyon durur
  // return anahtar kelimesini fonksiyonun çağrıldığı yere sonuç göndermek için kullanırız
  return `Merhaba ${name} Hoşgeldiniz`;
}

const metin =
  selamla2('Ali') +
  `
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos suscipit soluta necessitatibus tenetur repellat tempore modi. Distinctio quis maiores delectus.
`;

const sonuc = selamla('Çağrı');
const sonuc2 = selamla2('Çağrı');
console.log('SONUÇ>>>', sonuc);
console.log('SONUÇ2>>>', sonuc2);

//! Fonksiyon Örnek
function toplamHesapla(urunler) {
  // Eğerki hiç ürün yoksa toplam'ı 0 döndür
  if (urunler.length === 0) {
    return 0;
  }

  // toplam değişkeni tanımla
  let toplam = 0;

  // her bir ürünün fiyatını toplam değişkenine ekle
  for (let i = 0; i < urunler.length; i++) {
    toplam += urunler[i].fiyat;
  }

  // toplam değerini return et
  return toplam;
}

const donenDeger = toplamHesapla([
  { name: 'Klavye', fiyat: 500 },
  { name: 'Monitör', fiyat: 9045 },
  { name: 'İşlemci', fiyat: 10456 },
]);
console.log(donenDeger);

const donenDeger2 = toplamHesapla([]);
console.log(donenDeger2);

// Return satırlarının fonksiyonu durmruma görevi
// Videoyu api'a yükleyen fonksiyon olsun.
// Eğerrki aldığı parametredeki dosyanın uzantısı mp4 değilse fonksiyon çalışmasın

function videoYukle(dosya) {
  // eğerki dosya uzantısı mp4 değilse fonksiyonu durdur
  if (!dosya.endsWith('.mp4')) {
    console.log('veri formatı uygun değil');
    return;
  }

  // eğerki mp4 uzantılı ise burası çalışır
  console.log("Api'a veri Yükleniyor % 15");

  console.log("Api'a veri Yükleniyor % 55");

  console.log("Api'a veri Yükleniyor % 95");

  console.log('Video Başarıyla Yüklendi');
}

videoYukle('muzik.mp3');
videoYukle('muzik.jpeg');
videoYukle('muzik.mp4');

//! OK Fonksiyonu
//! Arrow Function
// Ok Fonksiyonları kısa bir syntax ile fonksiyonları tanımlaya yarar.
// Daha az kod yzarak aynı sonucu elde ederiz

//1) Geleneksel Fonksiyon
function toplama(a, b) {
  return a + b;
}

//2) Ok Fonksiyonu - 1.Kullanım
const toplama2 = (a, b) => {
  return a + b;
};

//3) Ok FOnksiyonu - 2. Kullanım
// Okun hemen ardından süslü parantez koymuyoruz
// Okun ardından yazdığımız değeri otomatik olarak return eder
// Hesaplamayı tek satırda yapmak zorundayız
const toplama3 = (a, b) => a + b;

//4) Ok Fonksiyonu - 3. Kullanım
// Hesaplanıcak değer 1 den fazla satırda tanımlanıcaksa veya
// Bir Nesne return etmek istiyorsak okun ardından () kullanırız

// Bir nesne return etmek için normalde yazmamız gereken minimum kod bukadardı
const ornek = (a, b) => {
  return {
    toplam: a + b,
  };
};

// Ok FOnksiyonun () kullanımı syaesinde nesneyi () ile çevreleyrek return edebiliyoruz
const toplama4 = (a, b) => ({ toplam: a + b });

//5) Ok FOnksiyonu - Tek Parametre Durumu
const toplama5 = (sayi) => sayi * sayi;
