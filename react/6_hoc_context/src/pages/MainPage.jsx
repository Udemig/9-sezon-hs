import axios from 'axios';
import { useEffect } from 'react';
import api from '../utils/api';

const MainPage = () => {
  useEffect(() => {
    // ürünlerin verilerini al
    api.get('/products').then((res) => console.log(res.data));
  }, []);

  return <div>MainPage</div>;
};

export default MainPage;
