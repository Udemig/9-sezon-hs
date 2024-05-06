import { fireEvent, render, screen } from '@testing-library/react';
import Scoops from '.';
import userEvent from '@testing-library/user-event';

/*
 ! Seçiciler > 3 ana parçadan oluşur

 ? 1) Method Tipi 2) All İfadesi 3) Seçici Methodu

 * Method Tipi > get | find | query

 * get > başlangıçta dom'da olan elementleri almak için kullanılır | elementi bulumzsa test başarısız olur
 
 * query > get ile benzer çalışır | elemeni bulumazsa null döndürür ve test devam eder 

 * find > elementin ne zaman ekrana basılacağı belli değilse kullanıllır ( api isteklerinde)
 * not: find methodu promise döndürür bu yüzden asyn await ile kullanılrı
 
 * eğer methoda all eklersek seçici koşula uyan bütün elementleri getirir
 * not: all kullanırsak gelen cevap her zaman bir dizi olur 
*/

test("API'dan alınan veriler için ekrana kartlar basılır", async () => {
  render(<Scoops />);

  // ekrana basılan resimleri al
  const images = await screen.findAllByAltText('çeşit-resim');

  // gelen resimlerin (kartların) sayısı 1'den büyük veya eşit mi
  expect(images.length).toBeGreaterThanOrEqual(1);
});

test('Çeşitlerin ekleme ve sıfırlama özellikleri toplam fiyatı etkiler', async () => {
  // userEventin kurulumunu yap
  const user = userEvent.setup();

  // bileşeni ekrana bas
  render(<Scoops />);

  // bütün ekleme ve sıfırlama butonlarını çağır
  const addButtons = await screen.findAllByRole('button', { name: /ekle/i });
  const delButtons = await screen.findAllByRole('button', { name: /sıfırla/i });

  // toplam fiyat elementini çağır
  const total = screen.getByTestId('total');

  // toplam fiyat 0'mı kontrol et
  expect(total.textContent).toBe('0');

  // ekle butonlarından birine tıkla
  await user.click(addButtons[0]);

  // toplam fiyat 20 mı kontrol et
  expect(total.textContent).toBe('20');

  // eklen butonlarından birine çıft tıkla
  await user.dblClick(addButtons[2]);

  // toplam fiyat 60 mı kontrol et
  expect(total.textContent).toBe('60');

  // ilk eklneni kaldır
  await user.click(delButtons[0]);

  // toplam fiyat 40 mı kontrol et
  expect(total.textContent).toBe('40');

  // ikinci ekleneni kaldır
  await user.click(delButtons[2]);

  // toplam fiyat 0'mı kontrol et
  expect(total.textContent).toBe('0');
});
