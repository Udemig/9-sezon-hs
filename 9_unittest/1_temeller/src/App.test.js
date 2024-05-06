//* App.test.js: APP bileşenin testlerin yazıldığı dosya
//* Bir dosyanın test dosyasını olduğunu anlamak için .test.js veya .test.jsx uzantısına bakmalıyız

//* Unit Test
//* Yazdığımız dinamik olan bütün react bileşenlerini test edicez
//* Bu sayede kod değişikliği yapıldığı zaman,
//* Yaptığımız değişiklikleri githuba göndermeden önce her şeyin
//* doğru çalığıtığından emin olmalıyız.
//* Büyük projelerde her işlevi kontrol etmek çok fazla zaman alcağından
//* ve gözden bir şey kaçırma ihtimali yüksek olduğundan unit test ile bileşenler
//* görevini yerine getiriyormu diye tek tek testleri yazılır. Kod değişikliği githuba
//* gönderilmeden önce testler çalıştırılır ve her şeyin düzgün çalışıtığından emin olunur
//* bu sayede bütün projeyi elle kontrol etmeye gerek kalmaz

import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Button from './components/Button';

// bir fonksiyonu veya bileşeni unit testini yazmak için "test" veya "it" mehodu kullanılır
// test fonksiyonu bizden 2 parametre ister
// 1) string > testin açıklaması
// 2) fonksiyon > testin yapıldığı yer
test('ekrana react öğren linki basılır', () => {
  // a) test edilcecek olan bileşenin test ortamında "ekrana" basılır
  render(<App />);

  // b) test edilecek elementi çağırma
  // bileşeni taraycıda ekrana basıyor olsaydık document.querySelector vb. methodalar kullanırdık ama unit test tarayıcıda değil donanınımızda çalışır bundan dolayı querySelector ile aynı görevi gören farklı seçici methodları kullanıcaz
  const linkEle = screen.getByText('React Öğren');

  // c) çağrılan elemandan beklentimizi test edicez
  expect(linkEle).toBeInTheDocument();
});

//* Buton bileşeni için test
test('Butona tıklanma olayında renk ve yazı değişimi olur', () => {
  // 1) test edilcek olan bileşen ekrana basılır
  render(<Button />);

  // 2) test edilecek element çağrılır
  const button = screen.getByRole('button');

  // 3) butonun rengi kırmızıdır
  expect(button).toHaveStyle({ background: 'red' });

  // 4) butonun içinde "Maviye Çevir" yazar
  expect(button).toHaveTextContent('Maviye Çevir');

  // 5) butonuna üzerine tıkla
  fireEvent.click(button);

  // 6) butonuna rengi aquadır
  expect(button).toHaveStyle({ background: 'aqua' });

  // 7) butonun içinde "Kırmızıya Çevir" yazar
  expect(button).toHaveTextContent('Kırmızıya Çevir');
});
