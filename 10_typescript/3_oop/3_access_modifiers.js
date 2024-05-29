"use strict";
/*
 * Access Modifiers - Erişim Beliteçleri

 * Class elemanları hassas bilegileri tutucakaları zaman bu bilgilerin class'ın dışından erişilip eşilmeyeceğini belirlemek isyebiliriz.

 * Örneğin kredi kartı bilgilerini tutan bir class olsun bu class'ın tutuğı bilgileri kod içerisnde her yerde kullanılşmasını önlemek isyebiliriz sebebi ise güvenlik zaafiyeti oluşturabileceği.

 * 3 adet erişim belirteci vardir
 
 * public: hem class dışarısından hemde class'ı extend eden diğer class'lardan eişlebilir

 * protected: sadece class'ın kendisi ve onu extend eden (miras alan) diğer class'lardan erişelebilir.

 * private: sadece tanımladığımız class içerisnde erişelebilir
*/
//! Public
class Arac {
    constructor(yeni_marka) {
        this.marka = yeni_marka;
    }
    tanit() {
        console.log(this.marka); // class içerisinden
    }
}
class Motor extends Arac {
    // miras alınan class
    calistir() {
        console.log(this.marka);
    }
}
const honda = new Arac("Honda");
console.log(honda.marka); // dışarıda da erişilebilir
// Protected
class EvcilHayvan {
    constructor(yeni_ad) {
        this.ad = yeni_ad; // tanımlandığı class içersiinden erişilebilir
    }
}
class Kopek extends EvcilHayvan {
    havla() {
        console.log(this.ad + " : hav hav"); // miras alan class'ta erişeebilir
    }
}
const boncuk = new Kopek("Boncuk");
boncuk.havla();
// console.log(boncuk.ad); protected olduğu için class dışında erişilemez
// Private
class OzelPersonel {
    constructor(yeni_isim) {
        this.isim = yeni_isim; // tanımlandığı class'ın kendi içerisinde erişilebilir
    }
}
class GumrukPersonle extends OzelPersonel {
    isminiYaz() {
        // console.log(this.isim); // miras alan class'ta erişilemiyor
    }
}
const tayfur = new OzelPersonel("tayfur");
// console.log(tayfur.isim); // class'tan oluştruduğumuz örnekte'de erişemiyoruz
/*
 * NOT: Erişim belirteçeleri aynı bütün ts'e özel olan kodlarda olduğu gibi kodu derlediğimizde ortadana kaybolur yani bu belirteçler sadece geliştirme sürecini daha güvenli hale getirir


  Erişim      Dışarıdan    Miras Alan Class     Tanımlandığı Class
  
  public        ✔︎                  ✔︎                       ✔︎

  protected                        ✔︎                       ✔︎

  private                                                  ✔︎
 */
