"use strict";
/*
 ! Type Casting
 * Tür Dönüşümü

 * Gerçek hayattan bir örnek verelim.
 * Kullanıcın sepetindeki ürünleri api'dan alıyoruz ancak bu ürünlerin fiyatı bazen api'dan string olarak geliyor. Eğerki uygulamada fiyatları sayı olarak istiyorsak bu noktada tür dönüşümü yaparız
*/
// örnek 1
let product1 = {
    name: "Laptop",
    price: 56000,
};
let product2 = {
    name: "Phone",
    price: "1500.00",
};
const newPrice1 = product1.price - 200;
const newPrice2 = Number(product2.price) - 200;
// değişkenin tipini any alrak tanımladık
let kisi = {
    name: "John",
    age: 55,
    adress: "123 main st.",
};
// kisinin tipini person tipini dönüştürme
let typedPerson = kisi;
console.log(typedPerson.name);
console.log(typedPerson.age);
