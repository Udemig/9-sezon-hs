"use strict";
/*
 * Type Annotion
 * Javascript'te değişkenin türünü belirleme gibi bir özellik söz konusu değil.
 * Fakat Typescript'de tanımladığımız değişkenlerin tiplerini de belirleyebiliyoruz.
 * Bu sayede değer ataması yaparken belirlenen tip kısıtlamasının dışarısına çıkamıyoruz. Bu da kodda oluşabilecek hataların erkenden önüne geçmemizi sağlar
 */
let foo;
// foo = 'ahmet';
foo = 30;
foo = 99;
// foo = true;
let username = 'ahmet';
username = 'furkan';
// Soru: Değiken tanımlarken type belirtmek zorunda mıyız?
let age = 50;
// age= "otuz"
// Cevap:
// Biz type tanımlamasak bile ts oto olarak değişkenin değerinin tipi her neyse onu değişkenin tipi olarak tanımlar. Bu bizim için kolaylık gibi gözükseede bazı durumlarda beklenmedik sonuçlar ortaya çıkabilir. Ve öğrenme sürecinde olduğumuzdan dolayo en sağlıklı yöntem bütün değişkenlerinin tipini tanımlamak
/*
 ? Javascript'de bulunan veri tipleri
 * string
 * boolean
 * number
 * array
 * object
 * null
 * undefined
 * function
 * symbol (pek kullanılmaz)
 * bigint (pek kullanılmaz)

 * bu veri tiplerinin tamamını tip atamasında kullabiliyoruz
*/
let project = 'Yemeksepeti';
let person_age = 50;
let has_license = true;
let student = {
    id: 2,
    name: 'Ali',
    graduation_year: 2020,
};
let value = null;
let value2;
