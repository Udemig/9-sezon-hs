import Select from './Select';
import { sortOpt, statusOpt, typeOpt } from './../constants/index';
import SubmitButton from './SubmitButton';
import { useEffect, useState } from 'react';
import api from '../utils/api';
import { useDispatch } from 'react-redux';
import { setLoading, setError, setJobs } from '../app/slices/jobSlice';

const Filter = () => {
  const [text, setText] = useState();
  const [debouncedText, setDebouncedText] = useState();
  const [sort, setSort] = useState();
  const [status, setStatus] = useState();
  const [type, setType] = useState();

  const dispatch = useDispatch();

  //* DEBOUNCE
  // Her tuş vuruşunda filtreleme yapmak düşük donanımlı cihaszlarda kasmalara sebep olur api isteği atılıyorsa sunucuda gereksiz trafiğe sesbep olur bu yüzüden kullanıcnın bir butona basmasını gerekitmeyen inputlarda debounce yöntemi kullanırak her tuş vuruşunda değil kullanıcı yazma işini bıraktığı anda ilgili fonksiyonu çalıştırırız. Ardışık olarakl gerçekeleşen fonksiyon çağırma işlemlerinde fonksiynu çağrıldığını görmezden ancak belirli bir zaman aşımı olduğunda fonksiyonu çalıştırır
  useEffect(() => {
    if (text === undefined) return;
    // bir sayaş başlat ve işlemi sayaç durunca yap
    const timer = setTimeout(() => setDebouncedText(text), 500);

    // eğerki süre bitmeden tekrar useEffect çalışırsa (yeni sayaç başlaması) önceki sayacı iptal et
    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  //* Filtreme veya sıralam ile ilgili bir state değiştiğinde api'den güncel verileri al

  useEffect(() => {
    const sortParam =
      sort === 'a-z' || sort === 'z-a'
        ? 'company'
        : sort === 'En Yeni' || sort === 'En Eski'
        ? 'date'
        : undefined;

    const orderParam =
      sort === 'a-z'
        ? 'asc'
        : sort === 'z-a'
        ? 'desc'
        : sort === 'En Yeni'
        ? 'desc'
        : sort === 'En Eski'
        ? 'asc'
        : undefined;

    const params = {
      q: text,
      _sort: sortParam,
      _order: orderParam,
      type: type || undefined,
      status: status || undefined,
    };

    dispatch(setLoading());

    api
      .get('/jobs', { params })
      .then((res) => dispatch(setJobs(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  }, [debouncedText, sort, type, status]);

  // formu sıfırla
  const handeleReset = (e) => {
    e.preventDefault();

    // state'leri sıfırla
    setText();
    setDebouncedText();
    setSort();
    setStatus();
    setType();

    // inputları sıfırla
    e.target.reset();
  };

  return (
    <div className="filter-sec">
      <h2>Filtreleme Formu</h2>

      <form onSubmit={handeleReset}>
        <div>
          <label>Ara</label>
          <input onChange={(e) => setText(e.target.value)} type="text" />
        </div>

        <Select
          label={'Durum'}
          options={statusOpt}
          handleChange={(e) => setStatus(e.target.value)}
        />

        <Select
          label={'Tür'}
          options={typeOpt}
          handleChange={(e) => setType(e.target.value)}
        />

        <Select
          label={'Sırala'}
          options={sortOpt}
          handleChange={(e) => setSort(e.target.value)}
        />

        <div>
          <SubmitButton text={'Filtreleri Sıfırla'} />
        </div>
      </form>
    </div>
  );
};

export default Filter;
