import { useState, useEffect } from 'react';

const FunctionComp = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');

  //* 1) bileşenin ekrana basılma olayını izle
  useEffect(() => {
    console.log('bileşenin ekrana basıldı!!!');
  }, []);

  //* 2) bileşenin ekrandan gitme olayını izle
  useEffect(() => {
    // bu fonksiyon unmount anında çalışır
    return () => console.log('Ekrandan Gitti!!!');
  }, []);

  //* 3) Hem ekrana gelme hemde ekranandan gitme olayını izle
  useEffect(() => {
    console.log('Ekrana geldi');

    return () => console.log('Ekrandan Gitti');
  }, []);

  //* 4) Bileşenin render olma olayını izle
  useEffect(() => {
    console.log('Bileşen render oldu. State veya prop değişti');
  });

  //* 5) Belirli bir state veya prop'un değişimi izleme
  useEffect(() => {
    console.log('Sayfa değşiti!!!', page);
  }, [page]);

  return (
    <div className="d-flex justify-content-center my-5 gap-5">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)} //
        className="btn btn-danger"
      >
        {'< Geri'}
      </button>

      <p className="lead">Sayfa: {page}</p>

      <button
        onClick={() => setPage(page + 1)} //
        className="btn btn-primary"
      >
        {'İleri >'}
      </button>

      <input onChange={(e) => setName(e.target.value)} type="text" />
    </div>
  );
};
export default FunctionComp;
