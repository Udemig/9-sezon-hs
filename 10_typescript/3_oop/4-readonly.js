/*

 * ReadOnly - Saltokunur Property:

 * Typescript'de bir sınfın veya nesnenin içerisndeki bir özelliği sadece okunabilir yapmaya yarar.
 * Read only ile tanımladığımız bir özelliğe değer ataması sınıflarda sadece constructor ile atanabilir
 * Nesnelerde ise hiç değiştirilemez
*/
var kisi = {
    name: "Mahmut",
    surname: "Yıldırım",
    TCno: "11122223334455",
};
kisi.name = "Mustafa";
// kisi.TCno = "e2wqeqwds"; tc no değiştirilemez
// SINIFLARDAKİ KULLANIM
var Kitap = /** @class */ (function () {
    function Kitap(yeni_isim, yeni_sayfa) {
        this.isim = yeni_isim;
        this.sayfa = yeni_sayfa;
    }
    Kitap.prototype.yeniSayfaAyarla = function (sayi) {
        this.sayfa = sayi;
        // this.isim = "sadas";
    };
    return Kitap;
}());
var kitap = new Kitap("Hobbit", 500);
kitap.sayfa = 100;
// kitap.isim = "Yüzüklerin Efendisi";
// SORU
// Readonly bir değer sahip ve değişkenlerini tanımlarken erişim belirteçlerini kullandğınız bir class yazınız ve class'tan bir örnek oluşturunuz
// CEVAP
var Araba = /** @class */ (function () {
    function Araba(yeniMarka, yeniFiyat, yeniBayiFiyat) {
        this.marka = yeniMarka;
        this.fiyat = yeniFiyat;
        this.bayiFiyat = yeniBayiFiyat;
    }
    return Araba;
}());
var yeniAraba = new Araba("TOGG", 1000000, 575000);
// CEVAP-2
var Person1 = /** @class */ (function () {
    function Person1(name, birthDate, age, address) {
        this.name = name;
        this.birthDate = birthDate;
        this.age = age;
        this.address = address;
    }
    Person1.prototype.getAge = function () {
        return this.age;
    };
    Person1.prototype.getAddress = function () {
        return this.address;
    };
    Person1.prototype.calculateYearOfBirth = function () {
        return new Date().getFullYear() - this.age;
    };
    return Person1;
}());
var person = new Person1("John Doe", new Date("1990-01-01"), 34, "123 Main St");
console.log("Name: ".concat(person.name));
console.log("Birth Date: ".concat(person.birthDate));
console.log("Age: ".concat(person.getAge()));
