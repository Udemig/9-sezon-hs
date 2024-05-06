import { render, screen } from '@testing-library/react';
import Card from './index';
import userEvent from '@testing-library/user-event';

const item = {
  id: '123',
  name: 'Vanilla',
  imagePath: '/images/vanilla.png',
};

// Prop olarak veri alan bir bileşeni test ediyorsak
// Aldığı propların benzerini göndermemiz gerekiyor
test('Miktar, başlık ve fotoğraf gelen propa göre ekrana basılır', () => {
  render(
    <Card
      item={item}
      amount={5}
      addToBasket={() => {}}
      clearFromBasket={() => {}}
    />
  );

  // miktar spanını çağır
  const amount = screen.getByTestId('amount');

  // miktar spanı 5 mi kontrol et
  expect(amount.textContent).toBe('5');

  // vanilla yazısı ekrana geldi mi kontrol et
  // getBy elementi bulumazsa hata fırlatır yani sadece element ekranda mı kontrolü yapmak istiyorsak onu getBy ile çağırmamız yeterli eleman ekrandaysa getBy onu alır problem olmaz değilse hata fırlatır testi bitirir yani elementi getBy ile çağırmamız bir nevi ekranda mı kontrolü yapmış olmamız anlamına gelir expecte gerek kalmaz
  screen.getByText('Vanilla');

  // resmi al
  const image = screen.getByAltText('çeşit-resim');

  // src değeri gönderilen propa göre mi kontrol et
  expect(image).toHaveAttribute('src', '/images/vanilla.png');
});

test('Butonlara tıklanınca fonksiyonlar doğru parametrelerle çağrılır', async () => {
  const user = userEvent.setup();

  // prop olarak scoops bileşenin gönderilen orjinal fonksiyonları gönderemeyeceğimizden fonksiyonlar doğru şekilde doğru zamanda doğru parametreler çalışıyor mu kontrolünü yapbailmek için asil fonksiyonların yerine test fonksiyonları göndericez
  const addMockFn = jest.fn();
  const clearMockFn = jest.fn();

  render(
    <Card
      item={item}
      amount={0}
      addToBasket={addMockFn}
      clearFromBasket={clearMockFn}
    />
  );

  // butonları al
  const addBtn = screen.getByRole('button', { name: /ekle/i });
  const clearBtn = screen.getByRole('button', { name: /sıfırla/i });

  // ekle butonuna tıkla
  await user.click(addBtn);

  // addToBasket fonksiyonu doğru parametleri alarak çalıştı mı?
  expect(addMockFn).toHaveBeenCalledWith(item);

  // sıfırla butonuna tıkla
  await user.click(clearBtn);

  // clearFromBasket fonksiyonu doğru parametreleri alarak çalıştı mı?
  expect(clearMockFn).toHaveBeenCalledWith(item.id);
});
