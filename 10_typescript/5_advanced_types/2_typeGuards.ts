/*
 ! Type Guards
 * Type Guardın amacı tip hakkında bilgi almak ve doğru tipe ulaşmaktır
 * Belirli bir türdeki bir değeri kontro etmek ve bu türe özgü işlemleri gerçekleştirmek için kullanılan tekniktir.
 * 2 yaygın type guard yöntemi vardır (typeOf,instanceOf)
*/

//! typeOf ile değerin veri tipini öğreniriz. ilkel veri tiplerinin kontorlünü yaparız
function log(input: string | number): void {
  console.log(typeof input);

  if (typeof input == "string") {
    console.log("Girilen değer stringdi: ", input);
  } else {
    console.log("Girilen değer sayıydı ", input);
  }
}

log(35);
log("selamlar");

//! instanceOf ile nesnenin  bir sınıfın örneği mi kontrolü yaparız
class Rabbit {}
class Bird {}
const rab = new Rabbit();

console.log(rab instanceof Rabbit);

class Cat {
  meow(): void {
    console.log("🐈🐈miyav miyav miyav miyav");
  }
}

class Dog {
  bark(): void {
    console.log("🐶🐶 hav hav hav hav");
  }
}

function makeSound(animal: Cat | Dog) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
const kedi = new Cat();
const kopek = new Dog();

makeSound(kedi);
makeSound(kopek);
