"use strict";
/*
 ! Interface
 * Interface, bir nesnenin yapısını ve bu nesnenin hangi özellik ve methodlara sahip olucağını

 ! Custom Type | Abstract Class | Interface
 * Birbirine benzer görevler yapmaktadır.
 * 3'ününde ortak noktası bir nesnenin tipini tanımlamak için kullanılması
  
 ? Abstract Class vs Interface:
 * Class'lar sadece bir class'ı miras alabilir yani extend eder.
 * Interface ise birden fazla interface'i miras alabilir.
 * Interface'lerde erişim belirteci bulunmuyor
 
 ? Type vs Interface:
 * Extend ve Implement yetenekleri farklı
 * Interface class tipi tanımlarkende kullanılabilir

 ? Interface Özellikleri
 * Interface isimlendirirken:
 * ya değişken isminin sonuna "Interface" takısı eklenir
 * yada değişken isminin başına "I" takısı eklenir
 */
const kisi1 = {
    name: "Ahmet",
};
const kisi2 = {
    name: "Ahmet",
};
// Type'ı yukarıda tanımladığımız interface ile belirtilmiş olan bir nesne oluşturalım
const square = {
    width: 200,
    height: 200,
    calculateArea() {
        return this.width * this.height;
    },
};
const circle = {
    width: 40,
    height: 1,
    radius: 25,
    calculateArea() {
        if (this.radius) {
            return Math.PI * this.radius * this.radius;
        }
        else {
            return "Lütfen yarıçap tanımlayın";
        }
    },
};
console.log(circle.calculateArea());
