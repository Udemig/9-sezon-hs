/*
 * OOP (OBJECT ORIANTED PROGRAMMING - Nesne Tabanlı Programlama)

 * Bugüne kadar projelerimizi genelde fonksiyonlar kullanrak geliştrdik.

 * Fakat projenin kapması arttıkça kullandığımız yaklaşım proje yönetimini zorlaştırabilir. Bu yüzden mühensiler büyük projerlri yarpaken yazılımcıların işini kolaylaştırabilecek programlama rayışına giriyorlar.

 * OOP: Etrafımızda bulunana nesnelerin özelliklerini ve davranışlarına göre modelleyerek yapılan programalama yönetini

 * OOP yaklaşımının içerisnde iki farklı tür bulunur
 * Bunlar class ve interface'lerdir
 * Sıkça karşılacağımız terimler
 * Class | Interface | Extends | InstanceOf | Implements
*/

class Old_Phone {
  // Buraası class'on gövdesidir. Buraya property ve methodlar gelir

  // Örnek property (özellik) leri aşşağıya yazalım
  telefon_tipi: "entegre" | "ayrılmış" = "entegre";

  tus_takimi: "döner" | "santral" = "döner";

  govde: string = "yatay";

  // Örnek methodları aşşağıya yazalım
  ahizeAc(): void {
    console.log("Ahize açılıyor....");
  }

  numaraCevir(telNum: string): boolean {
    console.log(
      this.tus_takimi === "döner" ? "Numara Çevriliyor" : "Numara tuşlanıyor"
    );

    console.log("Telefon çalıyor");

    return true;
  }

  ahizeKapat(): void {
    console.log("Ahize kapatılıyor");
  }
}

/*
 * Class'ların kullanımı
 * Bir class'ı tanımlamak aynı bir type'ı veya fonksiyonu tanımlamak gibidir.
 * Bir class'ı kullanmak için yani class'tan bir örnek oluşturabilmek için new anahtar kelimesini kullanırız.
 * New yardımı ile class^ın bir nevi çalışan bir kopyasını oluşturuz.
 
 * Benzetme: 
 * Class'ları bir fırındaki kalıba benzetebiliriz
 * Aynı özellikelere sahip nesneler üretmek iiçin kalıp görevi görür  
*/

const antikaTelefon = new Old_Phone();
const antikaTelefon2 = new Old_Phone();
const antikaTelefon3 = new Old_Phone();

console.log(antikaTelefon);

antikaTelefon.ahizeAc();

antikaTelefon.numaraCevir("05556667788");

antikaTelefon.ahizeKapat();

/*
 * Obje ve Class arasında ilişki şu şekildedir

 * Class'lar tanımlanmış olan ifadelerdir objeler ise bu tanımlanmış ifadelerin çalışan halidir.

 * Class'lar bilgisayarın RAM'inde yer kaplamaz ama objeler için RAM'de yer ayrılır

 * Bir fırın benzetmesi yapabilir: Fırındaki ekemek kalıbı bir class ise bu kalıptan çıkan ekmekler objelerdir.

 * JSON Objesi ile Class objesi:
 
 * Her ikiside birer obje (nesnedir)

 * Class objelerinni bir ismi vardır
 * Json objelerinde bu yoktur (anonimdir)
 
 * Json objelerinde objenin type'ını yazarız
 * Class objelerinde buna gerek kalmaz
 
 * JSON objeleri arasında miras alma olmaz
 * Class'lar arasında olabilir.
*/

// json objesi
const json_object = {
  name: "eski telefon",
  tus_takim: "entegre",
};

// class objesi
const class_object = new Old_Phone();

console.log("json objesi", json_object);
console.log("class objesi", class_object);

/*
 * this kullanımı
 * bir class'ın birden fazla kopyası (obje) oluşturlabilir.
 * ve her objenin kendine ait özellik ve methodları bulunur.
 * Objenin kendi içerisndeki özelliklerine erişebilmesi için this anahtar kelimesi kullanılır.
 * Bu sayede objedeki bir method içerisnden objeinin sahip olduğu özelliklere erişebiliriz.
 */

class Modal {
  baslik: string = "";
  acilma_sayisi: number = 0;
  acik_mi: boolean = false;

  modal_ac(yeniBaslik: string) {
    this.baslik = yeniBaslik;
    this.acilma_sayisi = this.acilma_sayisi + 1;
    this.acik_mi = true;
  }

  modal_kapat() {
    this.acik_mi = false;
    this.baslik = "";
  }
}

const uyariModal = new Modal();

console.log("önce>>>>", uyariModal);

uyariModal.modal_ac("Günlük saat sınırını aştınız");

console.log("açıkken>>>>", uyariModal);

uyariModal.modal_kapat();

console.log("son>>>>>", uyariModal);
