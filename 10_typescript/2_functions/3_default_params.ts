/*
 * Default Param (Varsayılan değere sahip parametre)

 * Bazı opsiyonel parametrelerde parametreyi göndermediğimzi zman değerinin undefined olmasını istemeyiz bunu yerine varsayılan bir değere sahip olması istenebilir

 * Özellikler
 * Default parama varsayılan değer verirken "=" ifadesi kullanılır
 
 * Bu yöntemi parametre göndermediğmiz zaman undefined olmaması için kullanırız 
*/

function selamVer(isim: string = "Dünya"): string {
  return "Merhaba " + isim;
}

console.log(selamVer("Ahmet"));

console.log(selamVer());

/*

 * SORU
 * Herkes default parametreye sahip bir fonksiyon yazsın
 * ardından fonksiyonu hem parametreyi göndererek hemde göndermeden çalıştırsın
 * ve elde ettiğiniz sonuçları konsola yazdırınız
 
 * kdv hesapla / zam - indirim hesapla

*/

// CEVAP
function sample(gateNumber: number, person: string = "Ahmet"): string {
  return "FlightGate:" + gateNumber + "Officer:" + person;
}

console.log(sample(12, "Ali"));
console.log(sample(1));

// CEVAP
function discount(percent: number = 10): string {
  return "disccount %" + percent;
}

console.log(discount(20));

console.log(discount());

const x = 30 + " selam";

// CEVAP
function hesaplaKDV(maliyet: number, kdv: number = 0.18) {
  console.log("KDV'Lİ FİYAT:" + (maliyet + maliyet * kdv));
}

hesaplaKDV(300);

hesaplaKDV(300, 0.8);
