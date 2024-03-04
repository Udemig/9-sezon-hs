import { useState } from 'react';
import { useEffect } from 'react';
import UserCard from './UserCard';

const UserPage = () => {
  // Kullanıncı state'i
  const [user, setUser] = useState(undefined);

  // Sayfa state'i
  const [page, setPage] = useState(1);

  // bileşenin ekrana basılma olayını ve page state'inin değişimini izle
  useEffect(() => {
    // id'si 1 olan kullanıcyı al
    fetch(`https://jsonplaceholder.typicode.com/users/${page}`)
      // istek başarılı olursa gelen veriyi işle
      .then((res) => res.json())
      // işlene veriyi state'e aktar
      .then((data) => setUser(data));
  }, [page]);

  return (
    <div>
      {user === undefined ? (
        'Yükleniyor..' //
      ) : (
        <UserCard user={user} />
      )}

      <div className="d-flex justify-content-between align-items-center mt-5">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-secondary"
        >
          Önceki
        </button>

        <p className="lead fs-3">{page}</p>

        <button
          disabled={page === 10}
          onClick={() => setPage(page + 1)}
          className="btn btn-success"
        >
          Sonraki
        </button>
      </div>
    </div>
  );
};

export default UserPage;
