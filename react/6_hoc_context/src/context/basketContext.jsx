import { useLocalStorage } from '@uidotdev/usehooks';
import { createContext } from 'react';
import { toast } from 'react-toastify';

// temel
export const BasketContext = createContext();

// sağlayıcı
export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage('sepet', []);

  // sepete ürün ekleyen fonksiyon
  const addToBasket = (newProduct) => {
    //1) bu üründen sepette var mı kontrol et
    const found = basket.find((i) => i.id === newProduct.id);

    if (found) {
      //2) ürün sepette varsa > miktarını 1 arttır
      //a) bulunan ürünün miktarının 1 arttır (nesneyi güncelle)
      const updated = { ...found, amount: found.amount + 1 };

      //b) sepet dizisindeki eski ürün yerine güncel halini koy
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));

      //c) state'i güncelle
      setBasket(newBasket);

      toast.success(`Ürünün miktarı arttırldı (${updated.amount})`);
    } else {
      //3) ürün septte yoksa > ürünü sepete ekle (miktar 1)
      setBasket(basket.concat({ ...newProduct, amount: 1 }));

      toast.success(`Ürün sepete eklendi`);
    }
  };

  // sepetten ürünü kaldıran fonksiyon
  const removeFromBasket = (delete_id) => {
    // silinicek elemanın dışarısnda kalanlar ile yeni dizi oluştur
    const filtred = basket.filter((i) => i.id !== delete_id);
    // state'i güncelle
    setBasket(filtred);

    toast.error('Ürün sepetten kaldırıldı');
  };

  //  miktar azaltan fonksiyon
  const decreaseAmount = (delete_id) => {
    //1) miktarı azaltılacak olan elemanı sepette bul
    const found = basket.find((i) => i.id === delete_id);

    if (found.amount > 1) {
      //2) miktarı 1 den fazla ise > miktarını 1 azalt
      //a) elemanın güncel nesnesini oluştur
      const updated = { ...found, amount: found.amount - 1 };

      //b) dizideki elemanın eski hali yerine güncel halini koy
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));

      //c) state'i güncelle
      setBasket(newBasket);

      toast.info(`Ürünün miktarı azaltıldı (${updated.amount})`);
    } else {
      //3) eğerki miktarı 1 ise > ürünü sepetten kaldır
      removeFromBasket(delete_id);
    }
  };

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, decreaseAmount }}
    >
      {children}
    </BasketContext.Provider>
  );
};
