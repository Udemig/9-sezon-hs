/*

 * ReadOnly - Saltokunur Property:

 * Typescript'de bir sınfın veya nesnenin içerisndeki bir özelliği sadece okunabilir yapmaya yarar.
 * Read only ile tanımladığımız bir özelliğe değer ataması sınıflarda sadece constructor ile atanabilir
 * Nesnelerde ise hiç değiştirilemez
*/

// NESNELERDEKİ KULLANIM
type Person = {
  name: string;
  surname: string;
  readonly TCno: string;
};

const kisi: Person = {
  name: "Mahmut",
  surname: "Yıldırım",
  TCno: "11122223334455",
};

kisi.name = "Mustafa";

// kisi.TCno = "e2wqeqwds"; tc no değiştirilemez

// SINIFLARDAKİ KULLANIM
class Kitap {
  public readonly isim: string;
  public sayfa: number;

  constructor(yeni_isim: string, yeni_sayfa: number) {
    this.isim = yeni_isim;
    this.sayfa = yeni_sayfa;
  }

  yeniSayfaAyarla(sayi: number) {
    this.sayfa = sayi;
    // this.isim = "sadas";
  }
}

const kitap = new Kitap("Hobbit", 500);
kitap.sayfa = 100;
// kitap.isim = "Yüzüklerin Efendisi";

// SORU
// Readonly bir değer sahip ve değişkenlerini tanımlarken erişim belirteçlerini kullandğınız bir class yazınız ve class'tan bir örnek oluşturunuz

// CEVAP
class Araba {
  public marka: string;
  public fiyat: number;
  private readonly bayiFiyat: number;

  constructor(yeniMarka: string, yeniFiyat: number, yeniBayiFiyat: number) {
    this.marka = yeniMarka;
    this.fiyat = yeniFiyat;
    this.bayiFiyat = yeniBayiFiyat;
  }
}

const yeniAraba = new Araba("TOGG", 1000000, 575000);

// CEVAP-2
class Person1 {
  public name: string;
  public readonly birthDate: Date;
  private age: number;
  protected address: string;

  constructor(name: string, birthDate: Date, age: number, address: string) {
    this.name = name;
    this.birthDate = birthDate;
    this.age = age;
    this.address = address;
  }

  public getAge(): number {
    return this.age;
  }

  protected getAddress(): string {
    return this.address;
  }

  private calculateYearOfBirth(): number {
    return new Date().getFullYear() - this.age;
  }
}

const person = new Person1(
  "John Doe",
  new Date("1990-01-01"),
  34,
  "123 Main St"
);

console.log(`Name: ${person.name}`);
console.log(`Birth Date: ${person.birthDate}`);
console.log(`Age: ${person.getAge()}`);
