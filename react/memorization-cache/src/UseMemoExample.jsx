import { useState, useMemo } from "react";

const UseMemoExample = () => {
  const [count, setCount] = useState(0);

  /*
   * React bileşendeli state'de bir güncelleme olduğunda güncellemenin
   ekrana yansıması için bileşeni tekrar render eder

   * Sorun: Aşağıdaki hesaplama bileşen her rebder odluğunda gereksiz
    yere en baştan tekrar hesaplanıyor

   * Çözüm: useMemo kullanıp yaptığımız hesaplamanın sonucunu cache'e atmak
    ve her rebder sırasında yeni sonuç üretmek yeribe cache'deki veriyi
    erişip kullanarak gereksiz maliyetli hesaplamların önünne geçmek
  */
  const yeniDizi = useMemo(() => {
    console.log("Hesaplama yapıldı");

    //1) maliyetli işlem > 1.000.000 elemanlı dizi oluştur
    const dizi = new Array(10000).fill("Merhaba Dünya");

    //2) maliyetli işlem > diziyi dön ve yeni dizi oluştur
    return dizi.map((item) => item + "!");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Sayacı Arttır ({count})
      </button>
    </div>
  );
};

export default UseMemoExample;
