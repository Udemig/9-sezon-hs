import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';

const App = () => {
  // tarayıcadaki url'e göre ekrana hangi bileşenin basılcağını belirle
  // react routerdom tarayıcaki url'e window nesnesi ile erişir
  return (
    <BrowserRouter>
      {/* Routes dışınnda: Bütün sayfalar için ortak */}
      <Header />

      {/* Projedeki sayfları tanımladığımız bir kapsayıcı */}
      <Routes>
        {/*
         * Route: Projedeki her bir sayfa için tanımlanır
         * Route'a yol ve o yol için ekrana baılcak olan bileşen verilir
         */}
        <Route path="/" element={<MainPage />} />
        <Route path="/ürünler" element={<ProductsPage />} />

        {/* Dynamic Route */}
        <Route path="/ürün/:id" element={<DetailPage />} />

        {/* Nested Routes: İç İçe Yollar */}
        <Route path="/ekstra" element={<Layout />}>
          <Route path="kategoriler" element={<h1>Kategoriler</h1>} />
          <Route path="kampanyalar" element={<h1>Kampanyalar</h1>} />
          <Route path="ayarlar" element={<h1>Ayarlar</h1>} />
        </Route>

        {/* Undefined Route: tanımsız bir route'a yönlenirse */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Routes dışınnda: Bütün sayfalar için ortak */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
