import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../Card';

const Scoops = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4040/scoops') //
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="mb-5">
      <h1>Dondurma Çeşitleri</h1>
      <p>
        Tanesi <span className="text-success">20</span>₺
      </p>
      <h3>
        Çeşitler Ücreti: <span className="text-success">0</span>₺
      </h3>

      <div className="row gap-5 justify-content-between mt-4">
        {data.map((i) => (
          <Card key={i.id} item={i} />
        ))}
      </div>
    </div>
  );
};

export default Scoops;
