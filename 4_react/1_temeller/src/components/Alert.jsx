import bell from '../images/bell-icon.webp';

const Alert = (props) => {
  return (
    <h1 className={`alert ${props.theme}`}>
      {/* İcon */}
      {props.icon === true ? <img width={50} src={bell} /> : null}
      
      {props.icon === true && <img width={50} src={bell} /> }

      {/* Koşulla metin içeriğini belirledik */}
      {props.theme === 'uyari'
        ? 'İşleminiz devam ediyor'
        : props.theme === 'hata'
        ? 'Üzgünüz bir hata oluştu'
        : props.theme === 'bilgi'
        ? 'İşlem Bşarıyla Gerçekleşti'
        : 'Tema Bilgisi Verilmedi'}
    </h1>
  );
};

export default Alert;
