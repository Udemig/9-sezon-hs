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
var Old_Phone = /** @class */ (function () {
    function Old_Phone() {
        // Buraası class'on gövdesidir. Buraya property ve methodlar gelir
        // Örnek property (özellik) leri aşşağıya yazalım
        this.telefon_tipi = "entegre";
        this.tus_takimi = "döner";
        this.govde = "yatay";
    }
    // Örnek methodları aşşağıya yazalım
    Old_Phone.prototype.ahizeAc = function () {
        console.log("Ahize açılıyor....");
    };
    Old_Phone.prototype.numaraCevir = function (telNum) {
        console.log(this.tus_takimi === "döner" ? "Numara Çevriliyor" : "Numara tuşlanıyor");
        console.log("Telefon çalıyor");
        return true;
    };
    Old_Phone.prototype.ahizeKapat = function () {
        console.log("Ahize kapatılıyor");
    };
    return Old_Phone;
}());
/*
 * Class'ların kullanımı
 * Bir class'ı tanımlamak aynı bir type'ı veya fonksiyonu tanımlamak gibidir.
 * Bir class'ı kullanmak için yani class'tan bir örnek oluşturabilmek için new anahtar kelimesini kullanırız.
 * New yardımı ile class^ın bir nevi çalışan bir kopyasını oluşturuz.
 
 * Benzetme:
 * Class'ları bir fırındaki kalıba benzetebiliriz
 * Aynı özellikelere sahip nesneler üretmek iiçin kalıp görevi görür
*/
var antikaTelefon = new Old_Phone();
var antikaTelefon2 = new Old_Phone();
var antikaTelefon3 = new Old_Phone();
console.log(antikaTelefon);
