/*
  ! React Bileşenleri (Component)
  * Kullanıcı arayüzü oluşturmak için kullanılan
  * temel yapı parçalarıdır. (ör:Yapboz Parçası)
  
  * Bileşen:
  * 1) Bir tane fonksiyon oluştururuz 
   
  * 2) Fonksyonun ismine bileşenin ismini veriyoruz.
   
  * !! Bileşenin ismini ilk harfi mutlaka büyük olmalı
  * !! Birden fazla kelimeden oluşuyorsa bitişik yazılmalı ve her kelimenin ilk harfi büyük olmalı
   
  * 3) Bileşen return satırında kullancının görüceği arayüz kodunu döndürmek zorundadır. (JSX - Javascript XML)
  * Döndürdüğümüz JSX kodu her zaman tek bir kapsayıcya sahip olmalıdır 
   
  * 4) Bileşeni farklı dosyalarda kulllanbilmek için export etmeliyiz
*/
import Button from './Button';

function Header() {
  // Eğerki kullancı giriş yapmışsa hesap ismi çıkış ve abone ol butonu ekrana gelsin
  // eğerki kullanıcı hesabına girmemişse o zman giriş yap ve kaydeol butonu ekrana bas
  const isAuth = true; // api'dan geldğiniş düşünelim

  return (
    <header>
      <h1>REACT</h1>

      <nav>
        {isAuth === true ? (
          <>
            <p>furkanevin</p>
            <Button title="Çıkış Yap" />
          </>
        ) : (
          <>
            <Button title="Giriş Yap" color="green" />
            <Button title="Kayıt Ol" color="blue" />
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
