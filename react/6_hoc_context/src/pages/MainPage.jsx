// Context yapılarına abone olmamızı sağlayan hook
import { useContext } from 'react';
// Abone olmak istedğimiz Context yapısı
import { ProductContext } from '../context/productContext';
import Loader from '../components/Loader';
import Card from '../components/Card';

const MainPage = () => {
  // Ürünler contextine abone ol
  const { products } = useContext(ProductContext);

  return (
    <div className="d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-4 my-5 mt-5 pt-5">
      {!products ? (
        <Loader />
      ) : (
        products.map((item) => <Card key={item.id} product={item} />)
      )}
    </div>
  );
};

export default MainPage;
