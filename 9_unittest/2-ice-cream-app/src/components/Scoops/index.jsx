import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../Card';

const Scoops = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4040/scoops') //
      .then((res) => setData(res.data));
  }, []);

  // sepete eleman ekler
  const addToBasket = (item) => {
    setBasket([...basket, item]);
  };

  // ürünleri sepetten kaldır
  const clearFromBasket = (delete_id) => {
    // id'si bilinen ürünü sepetten kaldır
    const filtred = basket.filter((i) => i.id !== delete_id);
    // state'i güncelle
    setBasket(filtred);
  };

  return (
    <div className="mb-5">
      <h1>Dondurma Çeşitleri</h1>
      <p>
        Tanesi <span className="text-success">20</span>₺
      </p>
      <h3>
        Çeşitler Ücreti:{' '}
        <span data-testid="total" className="text-success">
          {basket.length * 20}
        </span>
        ₺
      </h3>

      <div className="row gap-5 justify-content-between mt-4">
        {data.map((i) => (
          <Card
            item={i}
            key={i.id}
            addToBasket={addToBasket}
            clearFromBasket={clearFromBasket}
            amount={basket.filter((item) => item.name == i.name).length}
          />
        ))}
      </div>
    </div>
  );
};

export default Scoops;
