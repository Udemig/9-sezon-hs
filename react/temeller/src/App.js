import Header from './components/Header';
import Main from './components/Main';
import Card from './components/Card';

function App() {
  // Bir bileşeni nasıl kullanırız?
  return (
    <div>
      <Header />

      <div className="wrapper">
        <Card
          title="Mekanik Klavye"
          category="Çevre Birimi"
          image="https://iet-cdn-007.akinsofteticaret.net/digikeycomputer.com/Resim/Minik/1500x1500_thumb_st10767.jpg"
        />

        <Card
          title="Fotoğraf Makinası"
          category="Elektronik"
          image="https://www.desibela.com/productimages/137167/original/mini12-20li-pembe.jpg"
        />

        <Card
          title="Montör"
          category="Çevre Birimi"
          image="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lg/thumb/139112-2_large.jpg"
        />
      </div>
    </div>
  );
}

export default App;
