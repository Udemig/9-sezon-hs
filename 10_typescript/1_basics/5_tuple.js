"use strict";
/*
 * Tuple Type:
 * Typescript ile birlikte hayatımıza giren bir veri tipidir.
 * Uzunluğu sabit ve elemanlarını sırası / tipi belirli olan dizilerin tipini tanımlamak için kullanılır
  
 * Bir dizi içerisinde tipleri sırarlarız.
 * Örn: [number,string,string,object]
 */
// Örnek 1
const ders1 = ['programlama', 3];
// Örnek 2
const gradient = ['to right', 255255, 909090];
// Soru: Zaten union types ile aynı tipi tanımlyamıyormuyduk.
// Cevap: Hayır, bebzer ama işlevesel anlamda biraz daha farklı. Fark ise tuplede dizideki elemanların sırasını ve diznin uzunluğu belirleyebiliyoruz.
// Örnek 3
// Bir css rgb/rgba renginin veirlerini dizi içerisnde tutmak istedik
// rgb(123,56,78)
// rgba(123,56,78,0.7)
// yukarıdaki örnekte opacity değeri opsiyonel olması gerekli
// tuple'da bir değeri opsiyonel yapabilmek için tipinin sonuna ? konur
let color;
color = [123, 56, 78];
color = [88, 123, 56, 0.9];
// SORU: birden fazla optional değer olabiliyor mu ?
// Cevap: Evet, Sadece bir kural var oda bütün opsiyonel değerlerin sonda olması
let date;
// 3 değeride tanımladık
date = [10, 'Ocak', 2023];
// sonuncu opsiyonel değeri tanımlamadık
date = [10, 'Ocak'];
// son 2 opsiyonel değeri tanımlamadık
date = [10];
// 1. ve 3. değeri tanımladık
date = [10, undefined, 2023];
