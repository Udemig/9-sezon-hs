import { Link, useLocation } from 'react-router-dom';

const NotFoundPage = () => {
  // navigate ile aktarıla nhata mesajına eriş
  const loc = useLocation();

  return (
    <div className="container py-6  d-flex flex-column gap-4 align-items-center">
      {loc.state && <p className="bg-danger rounded p-2">{loc.state}</p>}

      <img className="img-fluid rounded w-75 " src="/book-404.gif" />

      <div>
        <h1>Aradığın sayfa bulunamadı</h1>

        <p>
          Böyle bir sayfa bulunamıyor. Ana Sayfa’ya dönüp başka bir şey
          arayabilirsin
        </p>

        <Link to="/" className="btn btn-primary">
          Ana sayfaya dön
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
