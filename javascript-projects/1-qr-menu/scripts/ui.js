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
        href="#"
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
