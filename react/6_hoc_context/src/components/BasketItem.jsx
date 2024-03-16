import { useContext } from 'react';
import { FaRegTrashCan } from 'react-icons/fa6';
import { BasketContext } from '../context/basketContext';

const BasketItem = ({ product }) => {
  const { addToBasket, removeFromBasket, decreaseAmount } =
    useContext(BasketContext);

  return (
    <div className="d-flex align-items-center gap-3 gap-md-4 bg-black rounded p-3 p-md-4">
      <div className="border bg-white rounded-3">
        <img
          className="object-fit-contain"
          height={80}
          width={80}
          src={product.image}
          alt={product.title}
        />
      </div>

      <div>
        <p className="fw-bold text-truncate">
          {product.title.length > 20
            ? product.title.slice(0, 20) + '...'
            : product.title}
        </p>
        <p>Kategori: {product.category}</p>
        <p>Reyting: {product.rating.rate}</p>
      </div>

      <div className="flex-grow-1 d-flex flex-column-reverse flex-md-row gap-4 align-items-center">
        <div className="bg-dark rounded-5 d-flex gap-4 align-items-center overflow-hidden btn-wrapper">
          <button onClick={() => decreaseAmount(product.id)}>-</button>
          <span>{product.amount}</span>
          <button onClick={() => addToBasket(product)}>+</button>
        </div>

        <h4 className="flex-grow-1">${product.price * product.amount}</h4>

        <button
          onClick={() => removeFromBasket(product.id)}
          className="rounded-2 d-none d-md-block"
        >
          <FaRegTrashCan />
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
