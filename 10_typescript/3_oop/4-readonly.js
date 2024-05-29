"use strict";
/*

 * ReadOnly - Saltokunur Property:

 * Typescript'de bir sınfın veya nesnenin içerisndeki bir özelliği sadece okunabilir yapmaya yarar.
 * Read only ile tanımladığımız bir özelliğe değer ataması sınıflarda sadece constructor ile atanabilir
 * Nesnelerde ise hiç değiştirilemez
*/
const kisi = {
    name: "Mahmut",
    surname: "Yıldırım",
    TCno: "11122223334455",
};
kisi.name = "Mustafa";
// kisi.TCno = "e2wqeqwds"; tc no değiştirilemez
// SINIFLARDAKİ KULLANIM
class Kitap {
    constructor(yeni_isim, yeni_sayfa) {
        this.isim = yeni_isim;
        this.sayfa = yeni_sayfa;
    }
    yeniSayfaAyarla(sayi) {
        this.sayfa = sayi;
        // this.isim = "sadas";
    }
}
const kitap = new Kitap("Hobbit", 500);
kitap.sayfa = 100;
// kitap.isim = "Yüzüklerin Efendisi";
// SORU
// Readonly bir değer sahip ve değişkenlerini tanımlarken erişim belirteçlerini kullandğınız bir class yazınız ve class'tan bir örnek oluşturunuz
// CEVAP
class Araba {
    constructor(yeniMarka, yeniFiyat, yeniBayiFiyat) {
        this.marka = yeniMarka;
        this.fiyat = yeniFiyat;
        this.bayiFiyat = yeniBayiFiyat;
    }
}
const yeniAraba = new Araba("TOGG", 1000000, 575000);
// CEVAP-2
class Person1 {
    constructor(name, birthDate, age, address) {
        this.name = name;
        this.birthDate = birthDate;
        this.age = age;
        this.address = address;
    }
    getAge() {
        return this.age;
    }
    getAddress() {
        return this.address;
    }
    calculateYearOfBirth() {
        return new Date().getFullYear() - this.age;
    }
}
const person = new Person1("John Doe", new Date("1990-01-01"), 34, "123 Main St");
console.log(`Name: ${person.name}`);
console.log(`Birth Date: ${person.birthDate}`);
console.log(`Age: ${person.getAge()}`);
