import { useState } from 'react';

const Counter = () => {
  // useState'i, tutlan değerin değişimi  bileşen içerisndeki arayüzü de etkilesin istiyorsak veriyi depolamak için tercih ederiz.
  // useState'i çağırdığımız zman dizi içersinde iki değer döndürür
  // 1.değer: tutuğumuz veri
  // 2.değer: tutuğumuz veriyi değiştirmeye yarayan fonksiyon
  //! state'deki değer değiştiğind ereact tekrardan render işlemini yapar bu sayede arayüz güncel kalmış olur
  const [count, setCount] = useState(10);

  // Sayfa yüklendiği anda react "render" ismini
  // verdiğimiz bir işlem gerçekleştirir
  // componenet return satırında yazdığımız jsx kodunu
  // html kodunu çevirir ve DOM'a gönderir (ekrana basar)
  return (
    <div className="d-flex justify-content-center align-items-center gap-5">
      <button onClick={() => setCount(count + 1)} className="btn btn-danger">
        Azalt
      </button>

      <p className="lead fs-1">{count}</p>

      <button onClick={() => setCount(count + 1)} className="btn btn-success">
        Arttır
      </button>
    </div>
  );
};

export default Counter;
