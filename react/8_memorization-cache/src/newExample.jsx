import { useState, useCallback } from "react";
import Display from "./Display";

const NewExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Merhaba");

  //                      SORUN
  // bu bileşen her render edilidğinde bu fonksiyon tekrardan oluşturulur
  // tekraradan oluşturulduğunda bellekte yeni yerini alır
  // biz bu fonksiyonu display prop olarak göndediğimizde fonksiyon içeirği
  // aynı olmasına rağmen bellekte referansı farklı olduğundan React.memo bunu
  // farklı bir prop gibi algılar ve display bileşnini gereksiz yere render eder
  //*   const updateCount = () => {
  //*     setCount(count + 1);
  //*   };

  //                     ÇÖZÜM
  // Bileşen her render edildiğinde fonksiyonu yeniden oluşturmak yerine ilk render
  // sırasında oluşturulan verisyonunu bellekte tutuyoruz ve her render sırasında
  // aynı fonksiyonu bellekten alıyoruz. Bu sayede yeni fonksiyon oluşturmamış oluyoruz
  // Ve bu fonksiyonuda prop olarak gönderdiğimiz react.memo sorun yaşamıyor.

  const updateCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>Sayaç</h2>

      <Display count={count} updateCount={updateCount} />

      <br />
      <br />
      <br />
      {/* sayaçtan bağımsız bir input tutalım */}
      <input onChange={(e) => setName(e.target.value)} type="text" />
      <p>{name}</p>
    </div>
  );
};

export default NewExample;
