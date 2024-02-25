/*
 ! JSX (Javascript XML):
 * react tarafında kullanılan bir söz dizimi.
 * JSX, javascript içersinde HTML benzeri bir yapıyla  * kullanıcı arayüzünü tanımlamaya yarar
 
 * HTML | JSX farkları:
 * JSX html deki bütün etiketlere sahiptir.
 * 1) {}: doğrudan jsx içerisine js kodu yazabiliyoruz 
 * 2) className: sınıf tanımlarken class yerine kullanıyoruz.
 * 3) inlineCSS: {{}} çift parantez içerisne yazarız
 * 4) <div/>: bütün etiketler self closing olaiblir
 * 5) bütün eitketleirn kapanışını söylememiz lazım. (hr,br,input,img)
 * 6) olay izleme: izlemek isteğimiz olayı direkt etikette tanımlıyoruz
 * 7) <></>: fragment
*/

const Main = () => {
  const text = 'Sayfamıza Hoşgeldiniz..';

  const formatPrice = (price) => price * 31 + '₺';

  const url =
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3bb5f691632079.5e372adaa9f70.png';

  // olay izlyecieye verdiğimiz fonksiyon
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <main>
      <h1>{text}</h1>

      <h2>{formatPrice(50)}</h2>
      <h2>{formatPrice(40)}</h2>

      <img
        style={{
          borderRadius: '40px',
          boxShadow: '0 0 20px white',
          width: 300,
        }}
        src={url}
      />

      <br />

      <div
        onClick={() => alert('TIKLANDI...')}
        style={{ width: '300px', height: '300px', background: 'red' }}
      />

      <input onChange={handleChange} />

      <button>1</button>
      <button>2</button>
    </main>
  );
};

export default Main;
