"use strict";
// getter method veri alamaya yarar
// setter method veriyi güncellemeyeyarar
// düz javascript'te getter ve setter method örneği
class Car {
    constructor() {
        this.battery_power = 10;
        this.key_status = 0;
        this.starter_motor_running = false;
        this.engine_started = false;
    }
    // mevcut bir property'nin değerini return edene methodlara getter deriz
    getEngineStatus() {
        return this.engine_started
            ? "çalışıyor " + this.battery_power + " batarya kaldı"
            : "kapalı";
    }
    // mevcut bir propertyi değiştiren methodlara setter diyoruz
    startEngine() {
        this.engine_started = true;
        this.battery_power -= 3;
    }
}
const tesla = new Car();
// setter method çalıştır
tesla.startEngine();
// getter methoodu çalıştır
console.log(tesla.getEngineStatus());
// Typescript'de getter ve setter method tanımı
class ExampleClass {
    constructor() {
        this._username = "sami";
    }
    // getter method mutlaka bir değer return etmeli
    get username() {
        console.log("username erişilmeye çalışılıyor...");
        return "merhaba " + this._username;
    }
    // setter method mutlaka 1 parametre alır ve değer döndürmez
    set username(yeni_ad) {
        console.log("username değiştirilmeye çalışılıyor");
        this._username = yeni_ad + Date.now();
    }
}
const exa = new ExampleClass(); // merhaba sami
// username erişlmeye çalıştığında getter method aktif olur
console.log(exa.username);
// username değiştilmeye çalışıldığında setter method aktif olur
exa.username = "Furkan";
console.log(exa.username); // merhaba Furkan1716234792853
// kullanım örneği
class Kisi {
    constructor() {
        this.name = "Ali";
        this.lastname = "Yıldız";
    }
    get fullname() {
        return this.name + " " + this.lastname;
    }
}
const kisi = new Kisi();
console.log(kisi.fullname);
// yeni örnek
class Circle {
    constructor(new_radius) {
        this._radius = new_radius;
    }
    // get methodu ile alan değerine eirşme
    get area() {
        return Math.PI * this._radius * this._radius;
    }
    // set methodu
    set radius(value) {
        if (value < 0) {
            console.log("geçersiz yarıçap, negtif olamaz");
            return;
        }
        this._radius = value;
    }
}
const cirle = new Circle(10);
console.log(cirle.area);
cirle.radius = -20;
console.log(cirle._radius); // 10
cirle.radius = 40;
console.log(cirle._radius); // 40
