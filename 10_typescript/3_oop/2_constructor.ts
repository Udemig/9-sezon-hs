/*
 * Constructor - İnşa Etme Methodu

 * Bir sınıfın contructor'ı o sınıftan bir nesne oluşturulduğunda ilk çağrılan methoddur.
 
 * Constructor methodu, oluşturlan objenin özelliklerinin başlangıç değerinin atanmasını sağlar.

*/

class Person {
  //1) Sınıfın özelliklerini belirleme
  ad: string;
  soyad: string;
  yas: number;

  //2) constructor yapısı ile dışardan değer alma
  constructor(yeni_ad: string, yeni_soyad: string, yeni_yas: number) {
    this.ad = yeni_ad;
    this.soyad = yeni_soyad;
    this.yas = yeni_yas;
  }

  //3)methodlarını tanımla
  kendiniTanit() {
    console.log(
      `Merhaba benim adım ${this.ad} ${this.soyad} ve ${this.yas} yaşındayım`
    );
  }
}

const kisi1 = new Person("Ahmet", "Demir", 35);
const kisi2 = new Person("Ali", "Kaya", 22);

kisi1.kendiniTanit();
kisi2.kendiniTanit();

console.log(kisi1, kisi2);

// SORU
// Bir bilgisayar donanımı için class yapısı oluşturunuz. Bu class'tan oluşturlacak nesne değerlerini constructor yapısı ile dışarıdan alsın ve en az bir methoda sahip olsın
// Class'tan en az 1 örnek oluşturun

// CEVAP-1
class Computer {
  model: string;
  marka: string;
  fiyat: number;

  constructor(pc_model: string, pc_marka: string, pc_fiyat: number) {
    this.model = pc_model;
    this.marka = pc_marka;
    this.fiyat = pc_fiyat;
  }

  sesliYanıtlama(voice: boolean) {
    return true;
  }
}
const pc1 = new Computer("hp", "HP 250 G9 6Q8M8ES CORE i7", 26000);

// CEVAP-2
class Bilgisayar {
  islemci: string;
  ekranKarti: string;
  fiyat: number;

  constructor(yeniIslemci: string, yeniEkranKarti: string, yeniFiyat: number) {
    this.islemci = yeniIslemci;
    this.ekranKarti = yeniEkranKarti;
    this.fiyat = yeniFiyat;
  }
}
const yeniBilgisayar = new Bilgisayar("intel", "g-force", 1000);

console.log(pc1);
console.log(yeniBilgisayar);
