import { render, screen } from '@testing-library/react';
import Scoops from '.';

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
