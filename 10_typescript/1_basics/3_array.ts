/*
 * Array Type:
 * Typescript'de dizilerin tipini tanımlarken sadece bu değişken bir dizi olucak demiyoruz. Bu dizinin içerisinde şu tipte elemanlar oluca şeklinde tanım yapıyoruz.
 *  Sonuç olarak dizinin elemanlarının veri tipini söylememiz gerek.
  
 * Tanım
 * tip[] 
 */

// Örnek - 1
const users: string[] = ['Gül', 'Fatma', 'Ali'];

// bu değişkeni manipüle ederken tip ksııtlaması karşımıza çıkıyor
users.push('Mahmut');
// users.push(99); HATA VERİR

// Örnek - 2
const ages: number[] = [435, 456, 134, 68, 234];

// Örnek - 3
const licences: boolean[] = [true, false, true, false, false];

/*
 * SORU: Bir dizinin içerisnde birden fazla farklı veri tipi kullanmak istersek ne yaparız?

 * CEVAP: Normalde bir dizide tek türde veri olması beklenir.
 * Bazı durumlarda birden faklı türde veri alan diziler olabilir.
 * Birden fazla türde veri alan diziler tanımlayabilmek için "unionTypes" kullanırız.
 * "Union Types (Birleşik Tipler)" oluşturabilemk için "|" kullanılır.
 * string | number "string yada number tipinde olabilir"
 */

let teachers: (string | null)[] = ['Uğur', 'Ahmet', null, 'Yasin'];
