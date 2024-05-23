/*
 * Any type
 * Bir değişkene any type atadığımız zaman değişken herhangi bir tür kısıtlamasına maruz kalmaz
  
 * Ts any type ile tanımlanmış olan bir değişken js değişkeni gibi davranır. Yani değişkene herhangi bir türde veri atanabilir.

 * Otomatik tamamlama devre dışı kalır.

 * Normal şartlarda any kullanılması ts mantığına aykırıdır. Çünkü ts'de amaç her dğeişkenin türünün billi olmasıdır.

 * Any genelde "geçici / acil" durumlarda kullanılır. Örn api'dan gelen bir veir var ama verinin tipini belirticek kadar zamanımız yok hemen çalışır hale getirmeli ve githuba yüklemeliyiz. bu seneryoda geçici süreliğine api'dan gelen verinin tipini any olarak bırakılabilir.

 * mutlaka any tipleri bir noktadan sonra kaldırılıp yerine doğru tipler tanımlanmalı
*/

let foo: any;
foo = "string";
foo = 45;
foo = undefined;
foo = [];
foo = {};

// SORU: bir dizi içinde farklı veri tipleri var ise , pipe ile tanımlayamazsak any mi deriz

// CEVAP: Sadece any demek yerine any dizisi demeliyiz
let bar: any[];

bar = ["x", 45, true];
