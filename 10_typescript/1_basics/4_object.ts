/*
 * Object Type:
 * Normal şartlarda ts'de bir onbject type'ı mevcuttur. Object type'ı ucu çok açık bir tip olduğu için kullanılması tercih edilmez.
  
 * JS, nesne tabanlı bir programlama dili olduğu için bir çok yapı (diziler,nesnler,fonksiyonlar,tarih) nesnelerden oluşur. Object type kullanrak net bir şekilde nesnenin tipini tanımlayamıyoruz

 * Biz genelde daha spesifik şekilde özellikleri olan nesneler ile çalışıyoruz. Bu noktada nesnenin özelliklerini belirlemeliyiz. Bu sayede hem ts hata durumunu izliyicek hem de oto. tamamlama özelliği devreye giricek
 */

let data: object;

data = {};

data = [];

data = new Date();

data = function () {};

// Bir nesnenin doğru şekilde tipini tanımlama

// 1- tip tanımı
let student: {
  id: number;
  firstname: string;
  lastname: string;
  isGraduated: boolean;
  age: number;
};

// 2- değer ataması
student = {
  id: 45,
  firstname: 'Ahmet',
  lastname: 'Yıldırım',
  isGraduated: false,
  age: 40,
};

// Örn: API'dan alınan verinin tipini tanımlayalım
let user: {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string | number;
    suite: string | number;
    city: string;
    zipcode: string | number;
    geo: {
      lat: string | number;
      lng: string | number;
    };
  };
  phone: string | number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

user = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: -37.3159,
      lng: 81.1496,
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};
