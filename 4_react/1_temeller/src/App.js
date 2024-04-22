import Header from './components/Header';
import Main from './components/Main';
import Card from './components/Card';
import { data } from './constant';
import Alert from './components/Alert';

function App() {
  //1) Bir bileşeni nasıl kullanırız?

  //2) Çoklu Eleman Renderlama
  // Data dizisindeki her bir nesne için
  // ekrana bir kart basmak istiyoruz

  // Bu verinin gelemem ihtimali de olsun
  const title = ''; // Apı 'dan gelen veri
  const isAuth = true;

  return (
    <div>
      <Header />
      <Alert theme="uyari" icon={true} />
      <Alert theme="hata" />
      <Alert theme="bilgi" icon={true} />
      <Alert theme="" />

      {/*
       * 1.yöntem > terneray
       * title varsa ekrana title'ı bas yoksa null dödnür
       */}
      {title ? <h1>{title}</h1> : <h1>başlık verisi alınamadı</h1>}
      {/*
       * 2.yöntem > and
       * title varsa title'ı ekrana bas
       */}
      {title && <h1>{title}</h1>}
      <div className="wrapper">
        {data.map((item) => (
          <Card item={item} text="merhaba" />
        ))}
      </div>
    </div>
  );
}

export default App;
