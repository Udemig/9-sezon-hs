/*
 * Function Type

 * Typescript'de fonksiyonların tipini tanımlamaktan kastımız fonksiyonun aldığı parametrelerin ve return ettiği değerin tipini tanımlamaktır

*/
function hesaplama(a, b) {
    return "Hesaplama Sonucu " + (a + b);
}
// return edilen değerin tipini tanımlarken string tanımladığımız için sonuç değişkenin tipi de string
var sonuc = hesaplama(33, 66);
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
var noNameFunc = function (par1) {
    return par1 * 10;
};

// 3) Ok fonksiyon
var arrowFunc = function (par1) {
    return par1 * 10;
};

// 4) Tek Satır Fonksiyon
var singleLine = function (par1) { return par1 * 10; };
