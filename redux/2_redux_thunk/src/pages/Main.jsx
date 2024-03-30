import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from '../redux/actions/restaurantActions';
import Container from '../components/Container';
import Loader from '../components/Loader';
import Error from '../components/Error';
import RestaurantCard from '../components/RestaurantCard';

const Main = () => {
  // restoran verilerine abone ol
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurants
  );

  // dispatch methodu kurlumu
  const dispatch = useDispatch();

  // verileri almak için method
  const getData = () => {
    dispatch(getRestaurants());
  };

  // restoran verilerini al
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <h1 className="text-3xl">Tüm Restoranlar</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} retry={getData} />
        ) : (
          restaurants.map((item) => (
            <RestaurantCard key={item.id} data={item} />
          ))
        )}
      </div>
    </Container>
  );
};

export default Main;
