import { useSearchParams } from "react-router-dom";
import Button from "../Button";

const ShowMore = () => {
  const [params, setParams] = useSearchParams();
  /*
   * 1) URL'de limit parametresi yoksa:
   * Kullanıcı projey yeni girmiştir ve varsayılan olarak ekranda 5 araç vardır
   * butonuna tıklanınca limit 10'a ayarlanmalı
    
   * 2) URL'de limit parameresi varsa:
   * Kullanıcı en az bir kere butona basmıştır
   * Mevcut limitin üzerine 5 ekle
   */

  // urlden limit parametresini al
  const limit = Number(params.get("limit")) || 5;

  const increaseLimit = () => {
    // yeni limit belirle
    const newLimit = limit + 5;

    // parametreleri güncelle
    params.set("limit", String(newLimit));

    // url'i güncelle
    setParams(params);
  };

  return (
    <div className="w-full flex-center gap-5 my-10">
      {limit < 30 && <Button title="Daha Fazla" handleClick={increaseLimit} />}
    </div>
  );
};

export default ShowMore;
