"use strict";
/*
 ! Intersection Types
 * Ts'de intersction types(kesişim türler) iki veya daha fazla türü birleştirmek için kullanılır.

 * Union Types ile arasındaki fark:
*/
let pos1 = { key1: "Deneme" };
let pos2 = { key2: "Test" };
let pos3 = { key1: "Deneme", key2: "Test" };
let exa = { key1: "Deneme", key2: "Test" };
let e1 = {
    id: 1,
    name: "John",
    email: "john@gmail.com",
    phone: "+445566779",
};
let e2 = {
    name: "Foo",
    credit: 100000,
    email: "Foo@gmail.com",
    phone: "+6634294829384",
};
let e3 = {
    id: 1123,
    name: "baz",
    credit: 32423523,
    email: "baz@gmail.com",
    phone: "+!347238842398",
};
