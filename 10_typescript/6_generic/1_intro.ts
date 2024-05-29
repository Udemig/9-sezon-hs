/*
 ! Generic:
 * Bir fonksiyon'un, type'ın, class'ın veya interface'in içerisndeki bazı türlerin dinamik olarak değişibilmesini sağlayan yapıdır.

 * Generic türler aşağıdaki yapılar içerisinde kullanılabilir.
 * fonksiyon
 * type
 * class
 * interface
*/

/*
 1- Fonksiyonlarda generic kullanımı:
 * mesela "useState" fonksiyonunu ele alalım. Bu fonksiyonun parametresine string bir değer yazdığımızda state değişkeninin türününde gönderdiğimiz parametrenin türüne göre değişmesini istersek generic kullanırız

 * Bir fonksiyon içerisnde generic nasıl tanımlanır?

 - Bir generic her türde değer alabilir.
 - Generic type'lar fonksiyonun içerisnde heryerde kullanılaiblir.
 - Generic tipi fonksiyonlarda fonksiyonun isminin bitişine ve paramtre kısmının öncesine "<>" ile tanımlarız
 - Bir fonksiyonda istediğimiz kadar generic tip tanımlanabilir.

*/

const getRandomNumber = (array: number[]): number => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};

console.log(getRandomNumber([1324, 32545, 57, 67, 45]));

const getRandomString = (array: string[]): string => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};

console.log(getRandomString(["MERHABA", "NASILSIN", "NABER", "İYİMİSİN"]));

// Generic kullanımı ile bu sorunu çözelim
const getRandom = <TYPE_PARAM>(array: TYPE_PARAM[]): TYPE_PARAM => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};

getRandom<string>(["SELAM", "NABER", "NASILSIN"]);

getRandom<number>([123, 435, 7, 89, 234]);

getRandom<boolean>([true, false, true, false]);

/*
 normalde generic tip alan fonk param gönderdiğimiz anda o paramon tipini generic olarak gönderirir ve bizim generi tipi göndermemeize gerek kalmaz yinede beklenemedik durumlar oluşmasını önlemek için her zmana generic tipi bizim göndermemizdaha sağlıklı
*/

getRandom([1, 2, 34, 5, 5, 6]);
