import { render } from '@testing-library/react';
import Form from './Form';
import userEvent from '@testing-library/user-event';

test('form gönderildiğinde detay sayfasına yönlendirir', async () => {
  // userEvent kurulum
  const user = userEvent.setup();

  // test edilebilir mock fonksiyon oluştur
  const mockFn = jest.fn();

  // test edilecek bileşeni renderla
  const { getByPlaceholderText, getByRole } = render(
    <Form handleSubmit={mockFn} />
  );

  // inputu çağır
  const input = getByPlaceholderText('Ülke İsmine Göre Ara');

  // inputa ülke yaz
  await user.type(input, 'Turkey');

  // butonu çağır
  const button = getByRole('button');

  // butona tıkla
  await user.click(button);

  // fonksiyon çağrıldı mı kontrol et
  expect(mockFn).toHaveBeenCalled();
});
