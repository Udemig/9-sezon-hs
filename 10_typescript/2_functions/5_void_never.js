"use strict";
/*
 * void:
 * genellikle bir fonksiyonun bir şey döndürmediğini ifade etmek için kullanılır
 
 * void varsa return satırı yoktur (varsada sadece undefined döndrüebilir)
 
 * return satırında bir değer dönüyorsa veri tipi void değildir
 */
function selamla() {
    console.log("selam, nasılsın?");
    // sadece fonksiyonu durdurmaya yarayan return kullanılabilir
    // hiç bir değer return edilemez
    return;
}
selamla();
/*
 * Never: hata üreten fonksiyonların tipini belirtirken kullanılır
 * Örneğin bir fonksiyon sürekli olarak hata fırlatması durumu
 * "Hiç bir zman bu noktaya ulaşılamaz" durumunu ifade eder

*/
function hataFonksiyonu(message) {
    throw new Error(message);
    console.log("merhaba");
}
try {
    hataFonksiyonu("sorun oldu");
    console.log("işlem başarılı");
}
catch (err) {
    console.log("hata oldu 💥", err);
}
/*
 * Sonuç olarak
 * fonksiyonun return tipi:
 * any ise her türlü değeri döndürebilir
 * void ise hiç bir değer döndüremez
 * never bir hata fırlatır (tani return satırı hiç olmaz)
*/
