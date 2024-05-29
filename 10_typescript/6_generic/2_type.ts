// Bir türü tanımlarken generic kullanımı yine türün dinamik olmasını ve type'ın kullanılabilir olmasını sağlar

type ArrayType<T> = {
  items: T[];
  addItem: (item: T) => void;
  getItem: (i: number) => T;
};

const numberArray: ArrayType<number> = {
  items: [1, 2, 3, 4, 5, 6],

  addItem(item) {
    this.items.push(item);
  },

  getItem(i) {
    return this.items[i];
  },
};

const strArr: ArrayType<string> = {
  items: ["a", "b", "c", "d"],

  addItem(item) {
    this.items.push(item);
  },

  getItem(i) {
    return this.items[i];
  },
};

// SORU:
// Dışarıdan en az 2 generic tip alan bir type, interface, fonksiyon veya class tanımlayın
// Daha sonrasında oluşturuduğunuz generic tip alan bu yapıyı en az 2 kere generic tipe farklı değer gönderrek kullanın

// CEVAP-1
class deneme<T, U> {
  ad: T;
  soyad: U;

  constructor(first: T, second: U) {
    this.ad = first;
    this.soyad = second;
  }
  
  const(): void {
    console.log(`First: ${this.ad}, Second: ${this.soyad}`);
  }
}
// İlk örnek: String ve Number türleri
const stringNumberDeneme = new deneme<string, number>("Hello", 42);
stringNumberDeneme.const();

// İkinci örnek: Boolean ve Array türleri
const booleanArrayDeneme = new deneme<boolean, number[]>(true, [1, 2, 3, 4]);
booleanArrayDeneme.const(); // Çıktı: First: true, Second: 1,2,3,4
