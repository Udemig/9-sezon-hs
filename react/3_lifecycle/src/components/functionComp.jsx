import { useState } from 'react';

const FunctionComp = () => {
  const [page, setPage] = useState(1);

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
    </div>
  );
};
export default FunctionComp;
