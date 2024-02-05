import { buttonData } from './constants.js';

const buttonsArea = document.getElementById('buttons');

// menu list divini çağırma
const menuList = document.getElementById('menu-list');

// Arayüz değişikliği yapan bütün fonksiyonları bu dosyada tutucaz
export const renderMenuItems = (data) => {
  // data dizisindeki her bir obje için bir tane kart html'i oluştur
  // Join methodu diziyi metine çevirmemizi sağladı
  const cardsHTML = data
    .map(
      (item) => `
      <a
        id="card"
        href="/detail.html?id=${item.id}"
        class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3"
      >
        <img
          class="rounded shadow img-fluid"
          src="${item.img}"
        />

        <div>
          <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success fw-bold">${(
              item.price * 30
            ).toFixed(2)}₺</p>
          </div>
          <p class="lead">
           ${item.desc}
          </p>
        </div>
      </a>`
    )
    .join('');

  // oluşturulan kartları #menuList divinin içine aktar
  menuList.innerHTML = cardsHTML;
};

// dizideki herbir eleman için ekrana buton basan fonk.
export const renderButtons = (activeText) => {
  // eskiden oluşturlan butonları kaldır
  buttonsArea.innerHTML = '';

  // butonların her biri için aşağıdaki adımları izler:
  buttonData.forEach((btn) => {
    //1) buton elementi oluştur
    const buttonEle = document.createElement('button');

    //2) class belirle
    buttonEle.className = 'btn btn-outline-dark';

    //3) data-id değerini tanımla
    buttonEle.setAttribute('data-id', btn.value);

    //4) içindeki yazıyı belirle
    buttonEle.innerText = btn.text;

    //5) eğerki butonun yazısı aktif yazı ile eşelşirse siyah yap
    if (btn.text === activeText) {
      buttonEle.classList.add('btn-dark', 'text-white');
    }

    //6) butonu dom (html)'a gönder
    buttonsArea.appendChild(buttonEle);
  });
};
