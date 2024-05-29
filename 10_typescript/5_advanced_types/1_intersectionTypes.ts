/*
 ! Intersection Types
 * Ts'de intersction types(kesişim türler) iki veya daha fazla türü birleştirmek için kullanılır.

 * Union Types ile arasındaki fark:
*/

/*
 * 1) Union
 * Union type'da belirtilen türlerden en az birinin bütün özelliklerini tanımlamalıyız
 * Yani typeA veya typeB veya her ikside olabilir
 */
type typeA = {
  key1: string;
};

type typeB = {
  key2: string;
};

type unionType = typeA | typeB;

let pos1: unionType = { key1: "Deneme" };
let pos2: unionType = { key2: "Test" };
let pos3: unionType = { key1: "Deneme", key2: "Test" };

/*
 * 2) Intersection
 * Kesişim türlerde ise türleri birleştirdiğimizden kaynaklı olarak her iki türünde bütün özellikleri tanımlanmalı
 */

type typeC = { key1: string };
type typeD = { key2: string };

type intersectionType = typeC & typeD;

let exa: intersectionType = { key1: "Deneme", key2: "Test" };

// Örnek
type BusinessPartner = {
  name: string;
  credit: number;
};

type Identity = {
  id: number;
  name: string;
};

type Contact = {
  email: string;
  phone: string;
};

type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

let e1: Employee = {
  id: 1,
  name: "John",
  email: "john@gmail.com",
  phone: "+445566779",
};

let e2: Customer = {
  name: "Foo",
  credit: 100000,
  email: "Foo@gmail.com",
  phone: "+6634294829384",
};

// İstersek 2'den fazla type'ıda birleştirebiliriz
type NewEmployee = Identity & BusinessPartner & Contact;

let e3: NewEmployee = {
  id: 1123,
  name: "baz",
  credit: 32423523,
  email: "baz@gmail.com",
  phone: "+!347238842398",
};
