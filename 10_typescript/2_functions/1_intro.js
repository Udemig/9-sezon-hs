"use strict";
/*
 * Function Type

 * Typescript'de fonksiyonların tipini tanımlamaktan kastımız fonksiyonun aldığı parametrelerin ve return ettiği değerin tipini tanımlamaktır

*/
function hesaplama(a, b) {
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
function hesapla(a, b) {
    return "Sonuç" + (a + b);
}
// 2) İsimsiz Fonksiyon
const noNameFunc = function (par1) {
    return par1 * 10;
};
// 3) Ok fonksiyon
const arrowFunc = (par1) => {
    return par1 * 10;
};
// 4) Tek Satır Fonksiyon
const singleLine = (par1) => par1 * 10;
// 5) Immediate Call (Hemen Çağrılan) Fonksiyon
// Tanımladığı gibi çağrılan fonksiyonlara veirlen isim
// Dosya içerisnde fonksiyonu bir daha kullanmıyıcaksak tercih edebiliriz
// a) normal yöntem
const func1 = (par) => {
    return par + " hemen çağrıldım";
};
const sonuc1 = func1(30);
console.log(sonuc1);
// b) immediate call
const sonuc2 = (function (par) {
    return par + "hemen çağrıldım";
})(10);
console.log(sonuc2);
let func = (user) => {
    return [user, user, user];
};
/*
 * Fonksiyon tipi tanımlarken ts'de 2 farklı yöntem bulunur.
 
 * 1.yöntem) yukardaıki yaptığımız gibi direkt fonksiyonların üzerinde param ve return type tanımı
 
 * 2.yöntem) fonksiyonun tipini type anahtar kelimesi ile oluşturduğumuz bir tipe aktarırız ve daha sonra kullanırız
*/
// 1.yöntem örn:
let fooFunc = (par1) => {
    return par1 * 20;
};
fooFunc(20);
let barFunc = (par1) => {
    return par1 * 20;
};
// b) fonksiyon tanımı
const calc = (a, b) => a * b;
// c) fonksiyonu çağır
const total = calc(10, 20);
const example = (location, deg) => "Merhaba" + location + "konumundaki hava sıcaklığı" + deg + "derece";
const location1 = (lat, long, deg) => "merhaba" + lat + long + "konumundaki hava sicakligi" + deg + "derece";
const havaDurum = (konum, derece) => "Merhaba" + konum + "konumundaki hava sıcaklığı " + derece + "derece";
