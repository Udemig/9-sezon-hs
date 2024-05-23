/*
 * Function Type

 * Typescript'de fonksiyonların tipini tanımlamaktan kastımız fonksiyonun aldığı parametrelerin ve return ettiği değerin tipini tanımlamaktır

*/

function hesaplama(a: number, b: number): string {
  return "Hesaplama Sonucu " + (a + b);
}

// return edilen değerin tipini tanımlarken string tanımladığımız için sonuç değişkenin tipi de string
const sonuc = hesaplama(33, 66);

/*
 * Javascript Fonksiyon Türleri
 * 1- İsimli Fonksiyon
 * 2- İsimsiz Fonksiyon
 * 3- Arrow (Ok) Fonksiyon
 * 4- Singleline (Tek Satır) Fonksiyon
 * 5- Immediate call Fonksiyon
 */

// 1) İsimli Fonksiyon
function hesapla(a: number, b: number): string {
  return "Sonuç" + (a + b);
}

// 2) İsimsiz Fonksiyon
const noNameFunc = function (par1: number): number {
  return par1 * 10;
};

// 3) Ok fonksiyon
const arrowFunc = (par1: number): number => {
  return par1 * 10;
};

// 4) Tek Satır Fonksiyon
const singleLine = (par1: number): number => par1 * 10;

// 5) Immediate Call (Hemen Çağrılan) Fonksiyon
// Tanımladığı gibi çağrılan fonksiyonlara veirlen isim
// Dosya içerisnde fonksiyonu bir daha kullanmıyıcaksak tercih edebiliriz

// a) normal yöntem
const func1 = (par: number): string => {
  return par + " hemen çağrıldım";
};

const sonuc1 = func1(30);
console.log(sonuc1);

// b) immediate call
const sonuc2 = (function (par: number): string {
  return par + "hemen çağrıldım";
})(10);

console.log(sonuc2);

// SORU: Api den gelen responsu parametre olarak gönderseydik typi ne olurdu?
// CEVAP: Kendi type anahtar kelimesi ile oluştrduğumuz tipleride parametre veya return edilen değerin tipinin yerine kullabiliyoruz

type userType = string | number;

let func = (user: userType): userType[] => {
  return [user, user, user];
};

/*
 * Fonksiyon tipi tanımlarken ts'de 2 farklı yöntem bulunur.
 
 * 1.yöntem) yukardaıki yaptığımız gibi direkt fonksiyonların üzerinde param ve return type tanımı
 
 * 2.yöntem) fonksiyonun tipini type anahtar kelimesi ile oluşturduğumuz bir tipe aktarırız ve daha sonra kullanırız
*/

// 1.yöntem örn:
let fooFunc = (par1: number): number => {
  return par1 * 20;
};

fooFunc(20);

// 2.yöntem örn:
type funcType = (par1: number) => number;

let barFunc: funcType = (par1) => {
  return par1 * 20;
};

// SORU: 2 farklı sayı alıp çarpımlarını return eden bir fonksiyon yazınız
// tip tanımlarken 2. yöntemi kullanınız

// a) type tanımı
type mathFnType = (a: number, b: number) => number;

// b) fonksiyon tanımı
const calc: mathFnType = (a, b) => a * b;

// c) fonksiyonu çağır
const total = calc(10, 20);

// SORU: Kişinin bulunduğu konumu ve oranın hava dereceisini parametre olarak alıp geriye "Merhaba .... konumundaki hava sıcaklığı .... derece" şeklinde bir metin return eden fonksiyon yazını ve tipini 2. yöntem ile tanımlayınız

// CEVAP
type newFunc = (location: [number, number], deg: number) => string;

const example: newFunc = (location, deg) =>
  "Merhaba" + location + "konumundaki hava sıcaklığı" + deg + "derece";

// cevap
type locationType = (lat: number, long: number, deg: number) => string;

const location1: locationType = (lat, long, deg) =>
  "merhaba" + lat + long + "konumundaki hava sicakligi" + deg + "derece";

// cevap
type weatherTypeFunc = (konum: string, derece: number) => string;

const havaDurum: weatherTypeFunc = (konum, derece) =>
  "Merhaba" + konum + "konumundaki hava sıcaklığı " + derece + "derece";
