import { useSearchParams } from 'react-router-dom';

const FilterArea = () => {
  // useSearchParams url'deki arama parametrelerini yönetmemizi sağlar
  // çağrılınca dizi içerisinde iki değer döndürür
  // 1- urldeki arama parametreleri
  // 2- url'i güncellemeye yarayan method
  const [searchParams, setSearchParams] = useSearchParams();

  // form gönderilince
  const handleSubmit = (e) => {
    // sayfa yenilemyi engelle
    e.preventDefault();

    // aratılan terimi arama parametresi olarak ekle
    searchParams.set('aramaTerimi', e.target[0].value);

    // url'i güncelle
    setSearchParams(searchParams);
  };

  // selectd değişince
  const handleChange = (e) => {
    // eklenicek parametreyi berlire
    searchParams.set('sırala', e.target.value);

    // url'i güncelle
    setSearchParams(searchParams);
  };

  return (
    <div className="mt-3 d-flex gap-3 align-items-center justify-content-between">
      <div className="d-flex gap-3 align-items-center">
        <label>Sırala</label>
        <select
          defaultValue={searchParams.get('sırala')}
          onChange={handleChange}
          className="form-select"
        >
          <option>a-z</option>
          <option>z-a</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          defaultValue={searchParams.get('aramaTerimi')}
          placeholder="aratılacak metin.."
          className="form-control"
          type="text"
        />
        <button className="btn btn-primary">Ara</button>
      </form>
    </div>
  );
};

export default FilterArea;
