/*
 ! Interface
 * Interface, bir nesnenin yapısını ve bu nesnenin hangi özellik ve methodlara sahip olucağını

 ! Custom Type | Abstract Class | Interface
 * Birbirine benzer görevler yapmaktadır.
 * 3'ününde ortak noktası bir nesnenin tipini tanımlamak için kullanılması
  
 ? Abstract Class vs Interface:
 * Class'lar sadece bir class'ı miras alabilir yani extend eder.
 * Interface ise birden fazla interface'i miras alabilir.
 * Interface'lerde erişim belirteci bulunmuyor
 
 ? Type vs Interface:
 * Extend ve Implement yetenekleri farklı
 * Interface class tipi tanımlarkende kullanılabilir

 ? Interface Özellikleri
 * Interface isimlendirirken:
 * ya değişken isminin sonuna "Interface" takısı eklenir
 * yada değişken isminin başına "I" takısı eklenir
 */

// Type ile Obje Tipi Belirleme
type PersonType = {
  name: string;
};

const kisi1: PersonType = {
  name: "Ahmet",
};

// Interface ile Obje Tipi Belirleme
interface IPerson {
  name: string;
}

const kisi2: IPerson = {
  name: "Ahmet",
};

// İleride oluşturucağımız bir geometrik şekil nesnesinin özelliklerini ve tipini tanımladığımız bir interface yazalım

interface IShape {
  width: number;
  height: number;
  radius?: number;
  calculateArea(): number | string;
}

// Type'ı yukarıda tanımladığımız interface ile belirtilmiş olan bir nesne oluşturalım
const square: IShape = {
  width: 200,
  height: 200,

  calculateArea() {
    return this.width * this.height;
  },
};

const circle: IShape = {
  width: 40,
  height: 1,
  radius: 25,

  calculateArea() {
    if (this.radius) {
      return Math.PI * this.radius * this.radius;
    } else {
      return "Lütfen yarıçap tanımlayın";
    }
  },
};

console.log(circle.calculateArea());
