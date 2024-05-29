"use strict";
/*
 * Değişken isimlendirme kurallarına göre isimlendirilir.
 * Yazılım camiasında genelde tek karakter ve büyük harf ile kullanılır.
 * Bunun sebebi ise generic tiplerin diğer tipler ve değişkenler ile karıştırlıması.
 * Bu yüzden genelde amacı yansıtan tek harf kullanılır
  
 * * T: Type
 * * R: herhangi bir Type
 * * Z: herhangi bir Type
 * * E: Error Type
 * * K: Key Type
 * * v: Value Type
*/
const exa_object = {
    key: 123,
    value: true,
    error: "404 not found",
    username: "furkan",
};
const response = {
    data: {
        products: [],
    },
    error: 404,
};
