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
enum Color {
  red,
  yellow,
  green,
}

let yanan_isik = Color.yellow;

console.log(yanan_isik); // 1

// Örnek 2
enum Gun {
  Pazartesi,
  Sali,
  Carsamba,
  Persembe,
  Cuma,
  Cumartesi,
  Pazar,
}

let day = Gun.Pazartesi;
let day2 = Gun[5];
let day3 = Gun[Gun.Sali];

console.log(day); // 0
console.log(day2); // Cumartesi
console.log(day3); // Salı

// Örnek 3
enum Status {
  set = "Hazırlanıyor",
  travel = "Dağıtıma Çıktı",
  done = "Teslim Edildi",
}

console.log("DURUM", Status.set); // Hazırlanıyor
console.log("DURUM", Status.travel); // Dağıtıma Çıktı
console.log("DURUM1", Status.done); // Teslim Edildi
