"use strict";
/*
 * Enum (Numaralandırma)
 * Belirli değerler kümesi
 * Benzer kategorideki değişkenleri bir arada tutmak için kullanılır
  
 * Genelde az miktarda farklı değerler sahip verilerin gruplandırılması için kullanılır

 * Enum isimlendirirken sonuna "enum" takısı koymak faydlı olabilir.

 * İsimlendiriken değişken isimlendirme kurallarına uyuyoruz

 * İlk harfi büyük olmalı
*/
// Örn: Trafik ışığının aşamlarının verisi tutualım
// klasik js ile tanım
const renkler = {
    red: 0,
    yellow: 1,
    green: 2,
};
// typescript ile tanım
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
let yanan_isik = Color.yellow;
console.log(yanan_isik); // 1
// Örnek 2
var Gun;
(function (Gun) {
    Gun[Gun["Pazartesi"] = 0] = "Pazartesi";
    Gun[Gun["Sali"] = 1] = "Sali";
    Gun[Gun["Carsamba"] = 2] = "Carsamba";
    Gun[Gun["Persembe"] = 3] = "Persembe";
    Gun[Gun["Cuma"] = 4] = "Cuma";
    Gun[Gun["Cumartesi"] = 5] = "Cumartesi";
    Gun[Gun["Pazar"] = 6] = "Pazar";
})(Gun || (Gun = {}));
let day = Gun.Pazartesi;
let day2 = Gun[5];
let day3 = Gun[Gun.Sali];
console.log(day); // 0
console.log(day2); // Cumartesi
console.log(day3); // Salı
// Örnek 3
var Status;
(function (Status) {
    Status["set"] = "Haz\u0131rlan\u0131yor";
    Status["travel"] = "Da\u011F\u0131t\u0131ma \u00C7\u0131kt\u0131";
    Status["done"] = "Teslim Edildi";
})(Status || (Status = {}));
console.log("DURUM", Status.set); // Hazırlanıyor
console.log("DURUM", Status.travel); // Dağıtıma Çıktı
console.log("DURUM1", Status.done); // Teslim Edildi
