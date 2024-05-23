/*
 *  Optional Params (Opsiyonel Parametreler)

 * Normal şartlarda fonksiyonun çağırabilmemeiz için typescript'de bütün parametrelerinin gönderilmiş olması beklenir.

 * Bazı durumlarda bazı parametreler zorunlu olmayabilir. bu durumda opsiyonel parametrele kullanılır

 * Tanım: (a:number,b?:string) => 
 * Bu tanım a parametreisnin mutlaka gönderilirkenb b parametresi istenise göndeirlirsin eğerki göndeirlirse string olsun anlamına gelir
 
 * Eğer opsiyonel olan parametreyi göndermezsek undefined değeri gider.

 * Opsiyonel parametreler her zaman en sonda yer alır
 * Opsiyonel bir parametrenin ardından zournlu bir parametre tanımlanamaz
 */

function exampleFn(param1: number, param2: string, param3?: object) {
  console.log("1.parametre", typeof param1);
  console.log("2.parametre", typeof param2);
  console.log("3.parametre", typeof param3);

  console.log("--------------------------");
}

exampleFn(99, "test", { id: 1 });

exampleFn(55, "deneme", undefined);

exampleFn(55, "deneme");

// Örnek
const karsilama = (isim: string, zaman?: string): string => {
  if (zaman) {
    return `İyi ${zaman} ${isim}`;
  } else {
    return `Merhaba, ${isim}`;
  }
};

console.log(karsilama("Ahmet"));

console.log(karsilama("Ayşe", "akşamlar"));
