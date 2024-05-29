"use strict";
/*
 * Custom Type | Type Aliases
 * Şuana kadar tip ataması yaparken js'de var olan temel tipeler ekstra oalrak bir iki tana tip kullandık. Gerçek projelerde o anki yaptığımız işse özel spesifik veri tiplerine ihtiyaç duyabiliyoruz.
  
 * Bunları tanımlamak içim "type" anahtar kelimesini kullanırız.

 * Neden ihitiyacımız var?
 * Çünkü belirlediğimiz bir type projenin bir çok alanında / sayfasında kullanılması gerekbilir. Bu noktada custom type kullanarka kopyala yapıştırın yani kod tekrarının önüne geçeriz.
 */
let message = "Selam günün nasıl geçti";
// sorun: aynı tipin birden fazla kez ihitiyaç duyulması
let foo = "merhaba";
let bar = 56;
let baz = "deneme";
let foo1 = "merhaba";
let bar1 = 56;
let baz1 = "deneme";
// sorun: aynı tipin birden fazla kez ihitiyaç duyulması
let user_1 = { name: "ahmet", age: 45 };
let user_2 = { name: "ali", age: 20 };
let user_3 = { name: "ahmet", age: 45 };
let user_4 = { name: "ali", age: 20 };
let isSuccess = true;
const xCords = [35, 45];
const yCords = [56, 78];
// Oluşturduğumuz custom type'lar heryerde kullanılabilir (değişkenin tipinde, fonksiyonların paramtrerisin tipini tanılmarken veya bir array tipi içersinde)
const flightRote = [
    [12, 13],
    [13, 13],
    [14, 13],
    [15, 13],
];
