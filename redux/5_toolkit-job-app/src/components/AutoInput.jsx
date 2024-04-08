import React from 'react';
import { useSelector } from 'react-redux';

const AutoInput = ({ label, name }) => {
  const { jobs } = useSelector((store) => store);

  // 1) sadece pozisyon değerlerinden oluşan bir dizi tanımla
  const arr = jobs.map((job) => job[name]);

  // 2) dizizde tekrar eden elemanları kaldır
  const filtredSet = new Set(arr);

  // 3) set'in döndürdüğü nesneyi diziye çevir
  const options = Array.from(filtredSet);

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input list={name} name={name} id={label} type="text" required />

      <datalist id={name}>
        {options.map((i) => (
          <option value={i} />
        ))}
      </datalist>
    </div>
  );
};

export default AutoInput;
