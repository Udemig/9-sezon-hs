// Layourt ekstra ayarlar ve kategoriler sayfasını kapsayan route'a veridiğimiz bir bileşen.
// Kapsayıcı route'a bileşen verdiğimiz zaman alt route'lardan hangisinie gidirsek gidilim kapsayıcı route'un bileşeni ile karşılarız
// Nested route'un kullanım alanları
// 1.Alan) Sadece bir kaç sayfada ortak olarak kullanılcak alanları belirlemeye yarar
// 2.Alan) Projedeki bazı Sayfaların hangi tipteki kullanıcalar tarafından erişilebilir olduğunu belirlememizi sağlar
import { NavLink, Outlet, useNavigate, Navigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  // api'dan alındğını varsayalım
  const user = {
    name: 'ahmet',
    type: 'admin',
  };

  // eğerki kullanıcı tipi admin değilse alt route'lara erişime izin verme
  if (user.type !== 'admin') {
    //? 1) hook kullanımı
    // render işlemi bitmeden önce yönlendirdiği için uyarı veriyor
    // navigate('/');
    //? 2) bileşen ile yönlendirme
    return <Navigate to={'/'} />;
  }

  return (
    <div className="d-flex gap-5 p-4">
      <aside className="d-flex flex-column bg-light p-3 rounded">
        <NavLink to={'/ekstra/kategoriler'}>Kategoriler</NavLink>
        <NavLink to={'/ekstra/kampanyalar'}>Kampanyalar</NavLink>
        <NavLink to={'/ekstra/ayarlar'}>Ayarlar</NavLink>
      </aside>

      <div>
        {/*
         * Asıl Sayfa İçeriği
         * Alt route'un kapsayıcı route içerisinde hangi noktada ekrana basılcağını belirler
         */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
