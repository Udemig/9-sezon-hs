const cars = [
  { marka: 'Toyota', model: 'Corolla', yil: 2022, renk: 'Beyaz' },
  { marka: 'Honda', model: 'Civic', yil: 2021, renk: 'Gri' },
  { marka: 'Ford', model: 'Focus', yil: 2020, renk: 'Mavi' },
  { marka: 'Chevrolet', model: 'Cruze', yil: 2022, renk: 'Siyah' },
  { marka: 'Volkswagen', model: 'Golf', yil: 2021, renk: 'Kırmızı' },
  { marka: 'Nissan', model: 'Altima', yil: 2020, renk: 'Sarı' },
  { marka: 'Hyundai', model: 'Elantra', yil: 2022, renk: 'Yeşil' },
  { marka: 'BMW', model: '3 Serisi', yil: 2021, renk: 'Bordo' },
  { marka: 'Mercedes', model: 'C-Class', yil: 2020, renk: 'Gümüş' },
  { marka: 'Audi', model: 'A4', yil: 2022, renk: 'Turuncu' },
];

//* push(): Dizinin sonuna bir veya daha fazla eleman eklemeye yarar
//* Doğrudan mevcut diziyi günceller
//* Değer Return etmez
// cars.push('Audi', 'BMW');
console.log(cars);

//* unshift(): Dizinin başına bir veya daha fazla eleman eklemeye yarar
//* Doğrudan mevcut diziyi günceller
//* Değer Return etmez
// cars.unshift('Mercedes');
console.log(cars);

//* pop(): Dizinin en sonundaki 1 elemanı kaldırır.
//* Doğrudan mevcut diziyi günceller
//* Kaldırdğı değeri return eder
const deleted = cars.pop();
console.log(deleted);

//* shift(): Dizinin en başında 1 elemanı kaldırır.
//* Doğrudan mevcut diziyi günceller
//* Kaldırdğı değeri return eder
const deleted2 = cars.shift();
console.log(deleted2);

//* slice(): Dizideki belirli bir kısmı kesmeye yarar
//* Mevcut dizide bir değişklik yapmaz
//* Aldığı kısmı bize getirir
const newArr = cars.slice(0, 4);
console.log(newArr);
console.log(cars);

//* splice: Dizide her türlü güncelleme yapmamıza olanak sağlar
//* Mevcut diziyi günceller
//* Return etmez
// cars.splice(0, 2, 'Honda', 'Porsche');
console.log('GÜNCEL>>>', cars);

//! Diziyi dönen türde methodlar
// Dizi içerisndeki bütün elemanları tek tek ziyaret edip
// Herbiri için bir fonksiyon çalıştırıyoruz
// Fonksiyonun aldığı parametre ise dizide anlık olarak ziyaret ettiğimiz eleman oluyor

//* forEach
const newcCars = [];
cars.forEach((car, i) => {
  console.log(car.marka, 'için çalıştı elemanın sırası', i);
  newcCars.push(car.marka + ' ' + car.model);
});

//* map
// foreach gibi dizyi dönen bir methoddur
// asıl olayı yeni bir dizi oluşturmasıdır
// fonksiyonun return ettiği her değer yeni diziye eklenir
const yeni_dizi = cars.map((car) => {
  return car.marka + ' ' + car.model;
});

//* map'in dizyi güncellemek için kullanımı
//* makrası honda olan aracın rengini kırmızı yap
const yenii_dizi = cars.map((car) => {
  if (car.marka === 'Honda') {
    return { marka: 'Honda', renk: 'Kırmızı' };
  } else {
    return car;
  }
});

// terneray ile güncelleme kullanımı
const yenii_dizi2 = cars.map((car) => {
  car.marka === 'Honda' ? { marka: 'Honda', renk: 'Kırmızı' } : car;
});

//* find
//* dizideki elemanın bir değerine göre bütün verilerini almamızı sağlar
//* fonksiyon kısmına koşul yazmamız gerekiyor
//* ilk bulduğu elemanı getirir
const found = cars.find((car) => car.marka === 'BMW');

console.log(found);

//* filter
//* dizidedki belirli bir koşula uyan elemanları alamızı sağlar
//* mevcut diziyi güncellemez
//* filtreme koşuluna uyan elemanlardan yeni dizi oluşturur
//* fonksiyon içerisne koşul yazarız
const filtred = cars.filter((car) => car.yil > 2021);
console.log(filtred);

//* filter'ı genelde dizideki bir elmanı kaldırmak istedğimizdede kullanabiliyoruz. Örn markası "Ford" olan lemanı diziden kaldıralım.
const filtred2 = cars.filter((car) => car.marka !== 'Ford');
console.log('ARABALAR>>', cars);
console.log('filtreleeene>>', filtred2);

//! Obje Methodları

const human = { name: 'John', age: 30, city: 'New York' };

// Object.keys(): Bir nesnenin anahtarlarını içeren bir dizi döndürür.
console.log(Object.keys(human));

// Object.values(): Bir nesnenin değerlerini içeren bir dizi döndürür.
console.log(Object.values(human));

// Object.entries(): Bir nesnenin anahtar-değer çiftlerini içeren bir dizi döndürür.
console.log(Object.entries(human));

// Object.hasOwnProperty(): Bir nesnenin belirli bir anahtarı olup olmadığını kontrol eder.
console.log(human.hasOwnProperty('age'));

// Object.freeze(): Bir nesneyi değişmez (immutable) yapar, yani üzerinde değişiklik yapılamaz.
Object.freeze(human);
human.age = 35;
console.log(human);
