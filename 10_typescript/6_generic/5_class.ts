class Sorter<T> {
  constructor(private data: T[]) {}

  getData(): T[] {
    return this.data.sort();
  }
}

const numbers = new Sorter<number>([123, 45, 235, 66]);

console.log(numbers.getData());

const strings = new Sorter<string>(["furkan", "ahmet", "burak"]);

console.log(strings.getData());

// Generic Örnek
// Tipi generic olarak alsakda bazen kısıtlama yapmak isteyebiliriz.
// Meselea generic olarak alınana tipin sadece string number boolean tiplerini alırken diğer veri tiplerini almasını engelleyebiliyoruz
class Container<T extends number | string | boolean> {
  private value: T;

  constructor(newValue: T) {
    this.value = newValue;
  }

  getValue(): T {
    return this.value;
  }
}

new Container<string>("merhaba");
new Container<number>(34);
new Container<boolean>(true);
// new Container<object>({ id: 1 });
// T generic tipi tanımlanırken extends kelimesi yardımıyla sadece number string ve boolean değerler alabilecek şekilde ksıtlandığı için object değerini generi tipe gönderemedik
