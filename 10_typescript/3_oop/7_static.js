"use strict";
/*
 * static kelimesi bir sınıf örneği (instance) olmadan doğrudan sınıfa ait oldğu anlamına gelir. Bu bir sınıfın örneğini oluşturmadan da sınıf üzerisnden erişlebilen özellik ve methodlar tanımlamak için kullanılır.
 */
// Static Method
class Matematik {
    topla(x, y) {
        return x + y;
    }
    static carp(x, y) {
        return x * y;
    }
}
// methodları kullanabilmek için class'tan bir instance oluşturmak zorundayız
const mat = new Matematik();
// örnek üzerinden methoda erişebilirz
const sonuc = mat.topla(10, 50);
console.log(sonuc);
// static methodlar örneklerden erişilemez
// mat.carp()
// static methodları doğrudan class aracaılığı ile kullanırız
const sonuc2 = Matematik.carp(10, 5);
console.log(sonuc2);
// Static değişken
class Ogrenci {
    constructor(yeni_ogrenci_isim) {
        this.isim = yeni_ogrenci_isim;
        // constuctor > class'tan her örnek oluşturulğunda yani her yeni öğren oluşturulduğunda çalışır
        Ogrenci.mevcutOgrenciSayisi++;
    }
}
Ogrenci.mevcutOgrenciSayisi = 0;
const instance1 = new Ogrenci("ali");
new Ogrenci("ayşe");
new Ogrenci("mehmet");
new Ogrenci("rıza");
new Ogrenci("sait");
console.log(Ogrenci.mevcutOgrenciSayisi);
