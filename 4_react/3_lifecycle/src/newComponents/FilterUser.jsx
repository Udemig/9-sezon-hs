import { useEffect, useState, useRef } from 'react';
import Loader from './Loader';
import UserTable from './UserTable';

const FilterUser = () => {
  // kullanıcı verisnin state'ini tut
  const [users, setUsers] = useState(null);

  // filtrelenen kullanıcların verisi
  const [filtredUsers, setFiltredUsers] = useState(null);

  // inputun referansını al
  const inputRef = useRef();

  // bileşenin ekrana basılma anını izle
  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setFiltredUsers(data.users);
      });
  }, []);

  const handleClick = () => {
    // inputun içerisinedki yazıya eriş
    const text = inputRef.current.value.toLowerCase();

    // kullanıcılar arasından isminde veya soysiminde inputa yazdığımız yazı olanları al
    const filtred = users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(text) ||
        user.lastName.toLowerCase().includes(text)
    );

    // filtrelenen kullanıcıları state'e aktar
    setFiltredUsers(filtred);
  };

  //  Eğerki kullanıcı verisi api'dan gelmediyse ekrana yükleniyor bas
  // Eğer geldiyse ekrana tablo bas ve kullanıcı verisini prop yöntemiyle tablo bileşennine aktar
  return (
    <div>
      <div className="d-flex gap-4 mb-4">
        <input ref={inputRef} className="form-control" type="text" />
        <button onClick={handleClick} className="btn btn-primary">
          Ara
        </button>
      </div>

      {users === null ? (
        <Loader /> //
      ) : (
        <UserTable users={filtredUsers} />
      )}
    </div>
  );
};

export default FilterUser;
