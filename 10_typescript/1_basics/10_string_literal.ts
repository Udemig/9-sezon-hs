/*
 * String Literal

 * Bir metnin tipini string olarak tanımlamak yeirne alabileceği değer sayası çok fazla değilse doğrudan bu değerleri yazarak tip ksısıtlaması yapabiliyoruz

*/

// Örn: Bir spotify benzeri projede kullanıcı tipini oluşiturmak istiyoruz id leri sayı ile isimleri string ile ifade edilirken type değeri "user" , "admin", "premium" değerlerini alabilir. Biz kullanıcı hesabının veri tipinin tanımlarken string yazarsak ucunu çok açık bırakmış oluyoruz bundan dolayı string literal ile direkt değer kısıtlaması yaptık

type userType = {
  id: number;
  name: string;
  type: "admin" | "user" | "premium"; // string literal
};

const newUser: userType = {
  id: 12312,
  name: "Mahmut",
  type: "premium",
};

// Örnek: Bir araba kiralama sitesi için api'dan gelen araba verilerinin tipini tanımla sahibib veirsiini neye benzediğini bilmiyoruz

type CarType = {
  make: string;
  model: string | number;
  gearbox: "automatic" | "manual" | "semi-auto";
  motor: "benzin" | "dizel" | "elektrik" | "hibrid";
  year: number;
  type: "awd" | "fwd" | "rwd";
  fuel: [number, number];
  owner: any;
};

const newCar: CarType = {
  make: "Honda",
  model: "Civic",
  gearbox: "automatic",
  motor: "benzin",
  year: 2013,
  type: "fwd",
  fuel: [100, 9],
  owner: null,
};

// SORU: İçerisinde en az 1 string number boolean array object tuple any değer buludunduran bir nesnenin tipini tanımlayın ve değer atamsınıda yapın

// CEVAP-1
type homeType = {
  daireNo: number;
  isinma: "doğalgaz" | "kömür" | "elektrik";
  odaSayisi: [number, number];
  sahip: any;
  esyaliOlmaDurumu: boolean;
  apartmanIsmı: string;
};

// CEVAP-2
type Electronic = {
  name: string;
  brand: string | number;
  year: number;
  voltaj: [number | number];
  owner: any;
};

// CEVAP-3
type classRoom = {
  lesson: string[];
  teacherName: string[];
  roomNumber: number;
  lessonDays: any;
  studentNames: [string, number];
  isNewClass: boolean;
};

// cevap-4
type Employe = {
  gender: string;
  age: number;
  position: "frontEndDeveloper" | "projectMenager" | "HR";
  unidegree: boolean;
  experiance: [number | number];
  eexpectations: any;
};

// cevap-5
type bookType = {
  baslik: string;
  yazar: {
    ad: string;
    soyad: string;
    dogumYili?: number;
  };
  yayinYili: number;
  tur:
    | "Roman"
    | "Bilim Kurgu"
    | "Fantezi"
    | "Korku"
    | "Biyografi"
    | "Tarih"
    | "Bilim";
  sayfaSayisi: number;
  yayinevi: string;
  mevcutlukDurumu: "Stokta" | "Stokta Yok";
  kapakTuru: "Ciltli" | "Karton Kapak";
  dil: string;
};
