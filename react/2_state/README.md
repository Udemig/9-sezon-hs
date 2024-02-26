# State'in Ortaya Çıkma Noktası

React uygulamalrda bileşen içerisnde kullanıcı etkileşimi sonucu arayüzde değişim olmasını isteyebiliriz. Ör: butonda tıklandığında tema değişimi.

# State

State: Bileşen içerisinde verileri saklamay ve yönetmeye yarayan yapıdır.

State'in değeri her değişitiğinde bileşen otomatik olarak tekrardan render olur (bileşenin ofnksiyonu tekrar çalışır) bu sayede state'e bağlı olarak görünümü değişicek olan arayüz yapıları güncellenmiş olur.

Eğerki tutuğumuz değer değiştiğinde arayüzde de bir değişim olması gerekiyorsa state'i tercih ediyoruz.

useState(x): useState i kullanırken x yazaılan yere "initial state" denir "başlangıç değeri" state'in bileşen ekrana basıldığı ilk anda sahip olucağı değer.

useState ile tutulan bir değeri değiştirmenin tek yolu useState'İn döndürdüğü setter fonksiyoınu kullanmak.

```js
//! 1) Obje Dağıtma  | Object Destructuring
const deneme = {
  id: 5,
  text: 'merhaba',
  title: 'ddeneme',
};

// objelerde değerler erişirken tanımlana özellik ismi neyse
//  o özellik isimini yazamk zorundayız
const { id, text, title } = deneme;

//!2) Obje Dağıtma Yöntemini Dizilerde de kullanabiliyoruz
const dizi = [10, () => alert('merhaba')];

// dizilerde kullanırken isim vermek özgürüz
const [number, selamla] = dizi;

console.log(number);
selamla();
//
```
