// değer tanımsız boş string veya 0 ise bilinmiyor döndürücek
// aksi takdirde veriyi döndürmeli
const checkValid = (value) => {
  return value === 0 || value === null || value === undefined || value === ''
    ? 'bilinmiyor'
    : value;
};

export default checkValid;
