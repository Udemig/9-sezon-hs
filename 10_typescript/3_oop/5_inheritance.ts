/*
 * Inheritance (Kalıtım | Miras)
 * Bir OOP kavramıdır. Bir sınıfın farklı bir sınıfın özelliklerini ve methodlarını miras almasına izin verir
  
 * Bu işlem kodun tekrar kullanılabilirliğini arttırır ve kod organizasyonunu geliştirir. Miras genellikle "ana sınıf" | "üst sınıfı" tan türetilmiş olan alt sınıflar arasında geçekleşir

 * Alt sınıfı (Derived | Child Class): bir üst(parent) sınıftan miras alarak özelliklerini ve davranışlarını genişletebilir.

*/

// Parent Class
class GeometrikSekil {
  public ad: string;

  constructor(yeni_ad: string) {
    this.ad = yeni_ad;
  }

  tanim() {
    console.log(`Bu bir ${this.ad} şeklidir`);
  }
}

// 1. Child Class
class Dikdortgen extends GeometrikSekil {
  private uzunluk: number;
  private genislik: number;

  constructor(yeni_uzunluk: number, yeni_genislik: number) {
    // üst class'ın constructonr methoduna gerekli parametreyi gönderdik
    super("Dikdörtgen");

    this.uzunluk = yeni_uzunluk;
    this.genislik = yeni_genislik;
  }

  // üst sınıfın methodlarından bağımsız yenilerini ekleyebiliyoruz
  alanHesapla(): number {
    return this.uzunluk * this.genislik;
  }

  // method override > üst sınıftan alınan bir methodu geliştirmeye yarar
  tanim(): void {
    // parent class'ta tanımlanan fonksiyonu çağır
    super.tanim();

    // fonksiyonu geliştirdik
    console.log(
      "Dikdörgenin uzunluğu " + this.uzunluk + "genişiliği " + this.genislik
    );
  }
}

const dik = new Dikdortgen(200, 50);

dik.tanim();

console.log(dik);

// 2. Child Class
class Daire extends GeometrikSekil {
  private yariCap: number;

  constructor(yeni_yariCap: number) {
    super("Daire");
    this.yariCap = yeni_yariCap;
  }

  alanHesapla() {
    console.log(Math.PI * this.yariCap * this.yariCap);
  }
}

const daire = new Daire(6);
daire.tanim();
daire.alanHesapla();

console.log(daire);

// Birden fazla kalıtım
class Human {
  eye_color: string = "";
}

class Father extends Human {
  eye_color = "kahverengi";
}

class Mother extends Human {
  eye_color = "mavi";
}

class Son extends Father {}

const hasan = new Son();

console.log("HASANIN GÖZ RENGİ ", hasan.eye_color); // kahverengi
