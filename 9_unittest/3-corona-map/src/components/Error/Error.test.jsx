import { render } from '@testing-library/react';
import Error from '.';
import userEvent from '@testing-library/user-event';

/*
  beforeEach(() => {
    console.log('yeni test başalamadan önce 😀😀');
  });

  afterEach(() => {
    console.log('test bittikten sonra 😂😂');
  });

  beforeAll(() => {
    console.log('bütün testlerden önce 😀😀');
  });

  afterAll(() => {
    console.log('bütün testlerden sonra 😀😀');
  });
*/

describe('error bielşeni testleri', () => {
  // gerekli kurumlar
  const user = userEvent.setup();
  const mockFn = jest.fn();
  let comp;

  //  her testin öncesinde error bileşeni render edilir
  beforeEach(() => {
    comp = render(
      <Error message={'Failed with status code of 404'} retry={mockFn} />
    );
  });

  // TEST - 1
  it('doğru hata mesajını gösterir', () => {
    comp.getByText(/failed with/i);
  });

  // TEST - 2
  it('tekrar dene butonu çalışır', async () => {
    const button = comp.getByRole('button');

    await user.click(button);

    expect(mockFn).toHaveBeenCalled();
  });
});
