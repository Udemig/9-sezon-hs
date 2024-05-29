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

type ExaType<T, K, V, E> = {
  key: K;
  value: V;
  error: E;
  username: T;
};

const exa_object: ExaType<string, number, boolean, string> = {
  key: 123,
  value: true,
  error: "404 not found",
  username: "furkan",
};

// örnek
type ApiResponse<T, E> = {
  data?: T;
  error?: E;
};

const response: ApiResponse<object, number> = {
  data: {
    products: [],
  },

  error: 404,
};
