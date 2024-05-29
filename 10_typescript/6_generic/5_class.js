"use strict";
class Sorter {
    constructor(data) {
        this.data = data;
    }
    getData() {
        return this.data.sort();
    }
}
const numbers = new Sorter([123, 45, 235, 66]);
console.log(numbers.getData());
const strings = new Sorter(["furkan", "ahmet", "burak"]);
console.log(strings.getData());
// Generic Örnek
// Tipi generic olarak alsakda bazen kısıtlama yapmak isteyebiliriz.
// Meselea generic olarak alınana tipin sadece string number boolean tiplerini alırken diğer veri tiplerini almasını engelleyebiliyoruz
class Container {
    constructor(newValue) {
        this.value = newValue;
    }
    getValue() {
        return this.value;
    }
}
new Container("merhaba");
new Container(34);
new Container(true);
// new Container<object>({ id: 1 });
// T generic tipi tanımlanırken extends kelimesi yardımıyla sadece number string ve boolean değerler alabilecek şekilde ksıtlandığı için object değerini generi tipe gönderemedik
