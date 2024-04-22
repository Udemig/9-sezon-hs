import { useContext } from 'react';
import { BasketContext } from '../context/basketContext';
import { Link } from 'react-router-dom';
import BasketItem from '../components/BasketItem';

const BasketPage = () => {
  // sepet context'inden sepete eklenen ürün dizisini aldık
  const { basket } = useContext(BasketContext);

  // toplam ürün sayısını hesapla
  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);
  const totalPrice = basket.reduce((total, i) => total + i.amount * i.price, 0);

  // sepette ürün yoksa kullanıcya bildir
  // varsa her bir ürün için ekrana kart bas
  return (
    <div className="mt-5 pt-5 p-2">
      <h1>SEPET</h1>

      <div className="row g-3">
        <div className="col-lg-8">
          <div>
            {basket.length === 0 ? (
              <div className="text-center my-5">
                <p>Öncelikle sepete bir ürün ekleyiniz</p>
                <Link className="btn btn-primary" to="/">
                  Ürünlere Git
                </Link>
              </div>
            ) : (
              basket.map((product) => (
                <BasketItem key={product.id} product={product} />
              ))
            )}
          </div>
        </div>

        <div className="d-flex flex-column gap-4 col-lg-4 bg-dark p-5">
          <h3>
            Toplam Ürün Sayısı:{' '}
            <span className="text-warning">{totalAmount}</span>
          </h3>
          <h3>
            Toplam Fiyat: <span className="text-warning">${totalPrice}</span>
          </h3>

          <form className="d-flex mt-4">
            <input
              className="form-control"
              placeholder="promo kodu"
              type="text"
            />
            <button className="btn btn-warning">Uygula</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
