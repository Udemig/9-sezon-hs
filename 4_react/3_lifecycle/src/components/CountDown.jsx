import { useEffect, useState } from 'react';

const CountDown = () => {
  const [number, setNumber] = useState(10);

  // bileşenin ekrana basılma olayını izle
  useEffect(() => {
    // her saniye bir fonksiyon çalıştırmak
    const intervalId = setInterval(() => {
      setNumber((prev) => (prev !== 0 ? prev - 1 : 0));
    }, 1000);

    // bileşenin ekrandan ayrılma olayında sayacı temizle (kaldır)
    return () => clearInterval(intervalId);
  }, []);

  const handleClick = () => {
    // fonksiyon çalıştığı andaki number değeri 10
    // o yüzden hep aynı number değeri üzerinden işlem yapar
    setNumber(number + 1); // 10 + 1
    setNumber(number + 1); // 10 + 1
    setNumber(number + 1); // 10 + 1

    // sorunun çözümü
    // useState'in döndürüğü setter methodunun 2. kullanımı.
    // setter method'a eğerki parametre olarak bir fonksiyon tanımlarsak o fonksiyon kod satırı çalıştığı andaki en son state değeri neyse onu parametre olarak alır ve fonksiyonun return ettiği değer state'in yeni değeri olur. Bu yöntemi state'i bir döngü içerisnde veya interval ile sürekli güncellerken kullanabiliriz. Ayrıca alt bileşen prop olarak state'in değerini göndermeden en son değere erişmemizi sağlar.
    setNumber((enson) => enson + 1); // 10 + 1
    setNumber((enson) => enson + 1); // 11 + 1
    setNumber((enson) => enson + 1); // 12 + 1
    setNumber((enson) => enson + 1); // 12 + 1
    setNumber((enson) => enson + 1); // 12 + 1
    setNumber((enson) => enson + 1); // 12 + 1
  };

  return (
    <div>
      <h1
        style={{
          fontSize: '90px',
          textAlign: 'center',
        }}
      >
        {number}
      </h1>

      <button onClick={handleClick} className="btn btn-primary">
        Arttır
      </button>
    </div>
  );
};

export default CountDown;
