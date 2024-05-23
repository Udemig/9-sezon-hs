/*
 * Rest Param
 * parametre listesinin belirsiz veya sınırsız olduğu duurmlarda kullanılır.
 
 * Özelllikler
 * Bir parametreyi rest param haline getirmek için (...) kullanırız
 
 * Bir rest paramın ardından başka bir parametre yazılamaz (sebebi rest paramın kaç taane değer alıcağı belirsiz olması) 

 * Gönderilen paramtreler res ile bir dizi haline getirilir
*/

function toplam(metin: string, ...sayilar: number[]) {
  return metin + sayilar.reduce((total, sayi) => total + sayi, 0);
}

const total = toplam("Sonuç ", 99, 11, 22, 33, 55, 11, 99, 1234);
const total2 = toplam("Sonuç ", 99, 11, 22, 33);
const total3 = toplam("Sonuç ", 1, 12, 2, 6, 1, 23, 4, 5, 7, 8, 79, 3, 4, 32);

console.log(total);
console.log(total2);
console.log(total3);

// SORU
// İstenildiği kadar sayı gönderilebilen
// aldığı ilk 2 parametreyi toplayan
// ilk 2 parametrenin devamında gelen bütün parametreleri çarpan
// bir fonksiyon yazınız
// toplam ve çarpımı bir nesne içerisnde döndürsün
// örn { toplam:190, carpim:780}

// CEVAP-1
function example2(
  number1: number,
  number2: number,
  ...numbers: number[]
): { toplam: number; carpim: number } {
  const carp = numbers.reduce((total, number) => total * number, 1);

  return { toplam: number1 + number2, carpim: carp };
}

const sonuc3 = example2(10, 20, 2, 3, 5);

console.log(sonuc3);

// CEVAP-2
function calcNumbers(num1: number, num2: number, ...sayilar: number[]): {} {
  const total = num1 + num2;

  const multiply = sayilar.reduce((acc, item) => acc * item, 1);

  return {
    total,
    multiply,
  };
}

console.log(calcNumbers(5, 6, 2, 4, 6, 8, 10));
