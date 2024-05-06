import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Toppings from '.';

test('sosları ekleme ve çıkarma işlemlerinin toplam fiyata olan etkisi', async () => {
  const user = userEvent.setup();

  //1) bileşeni renderla
  render(<Toppings />);

  //2) toplam spanı al
  const total = screen.getByTestId('total');

  //3) bütün sos checkboxlarını al
  const toppings = await screen.findAllByRole('checkbox');

  //4) toplam alanı 0 mı kontrol et
  expect(total.textContent).toBe('0');

  //5) bütün checkbox'ların tiklenmediğini kontrol et
  toppings.forEach((i) => expect(i).not.toBeChecked());

  //6) checkboxlardan birini tikle
  await user.click(toppings[0]);

  //7) toplam alanı 3 mü kontrol et
  expect(total.textContent).toBe('3');

  //8) checkboxlardan birini tikle
  await user.click(toppings[4]);

  //9) toplam alanı 6 mü kontrol et
  expect(total.textContent).toBe('6');

  //10) tiklenenlerden birini kaldır
  await user.click(toppings[4]);

  //11) toplam alanı 3 mü kontrol et
  expect(total.textContent).toBe('3');

  //12) tiklenenlerden diğerini kaldır
  await user.click(toppings[0]);

  //13) toplam alanı 0 mü kontrol et
  expect(total.textContent).toBe('0');
});
