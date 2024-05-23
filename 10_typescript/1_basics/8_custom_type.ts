/*
 * Custom Type | Type Aliases
 * Şuana kadar tip ataması yaparken js'de var olan temel tipeler ekstra oalrak bir iki tana tip kullandık. Gerçek projelerde o anki yaptığımız işse özel spesifik veri tiplerine ihtiyaç duyabiliyoruz.
  
 * Bunları tanımlamak içim "type" anahtar kelimesini kullanırız.

 * Neden ihitiyacımız var?
 * Çünkü belirlediğimiz bir type projenin bir çok alanında / sayfasında kullanılması gerekbilir. Bu noktada custom type kullanarka kopyala yapıştırın yani kod tekrarının önüne geçeriz.
 */

// char isminde özel bir tip oluşturduk
type char = string;

let message: char = "Selam günün nasıl geçti";

// sorun: aynı tipin birden fazla kez ihitiyaç duyulması

let foo: string | number = "merhaba";
let bar: string | number = 56;
let baz: string | number = "deneme";

// çözüm sıklıkla kullanılan tipler için bir özel tip oluşturmak

type alpha = string | number;

let foo1: alpha = "merhaba";
let bar1: alpha = 56;
let baz1: alpha = "deneme";

// sorun: aynı tipin birden fazla kez ihitiyaç duyulması

let user_1: { name: string; age: number } = { name: "ahmet", age: 45 };

let user_2: { name: string; age: number } = { name: "ali", age: 20 };

// çözüm sıklıkla kullanılan tipler için bir özel tip oluşturmak

type userType = { name: string; age: number };

let user_3: userType = { name: "ahmet", age: 45 };

let user_4: userType = { name: "ali", age: 20 };

// SORU: bolean değerlerde de geçerli mi

// CEVAP: Custom type'larda her türlü tip tanımlanabilir

type bool = boolean;

let isSuccess: bool = true;

// Örneğin tuple tipini custom type yapalım
type geoType = [number, number];

const xCords: geoType = [35, 45];
const yCords: geoType = [56, 78];

// Oluşturduğumuz custom type'lar heryerde kullanılabilir (değişkenin tipinde, fonksiyonların paramtrerisin tipini tanılmarken veya bir array tipi içersinde)

const flightRote: geoType[] = [
  [12, 13],
  [13, 13],
  [14, 13],
  [15, 13],
];
