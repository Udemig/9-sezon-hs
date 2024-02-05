//* diğer dsosyalrdan alınan veirler
import { renderMenuItems, renderButtons } from './scripts/ui.js';

const buttonsArea = document.getElementById('buttons');

//* datayı global scope'da tanımla
let data;

//* menü veirlerini json dosyasından çeken fonk.
async function fetchMenu() {
  //* api'dan verileri al
  const res = await fetch('./db.json');

  //* json verisni js'e çevir
  data = await res.json();
}

//* sayfa yüklenme olayını  izle
window.addEventListener('DOMContentLoaded', async () => {
  // ekrana butonları bas
  renderButtons('Hepsi');

  // verileri çeken fonksiyonu çalıştır
  fetchMenu()
    // fonksiyon başarılı olursa ekrana kartları basan fonksiyonu çalıştır
    .then(() => renderMenuItems(data.menu));
});

//* butonlara tıklanma olayını izle
buttonsArea.addEventListener('click', (event) => {
  // butona tıklanmadıysa fonksiyonu durdur
  if (event.target.id == 'buttons') return;

  // active olan butonu belirlemek için butonları ekrana terkra bas
  renderButtons(event.target.innerText);

  // filtrelenicek kategori ismini belirle
  const selectedCategory = event.target.dataset.id; // breakfast

  if (selectedCategory === 'all') {
    //? eğer hepsi seçneği seçildiyse
    // bütün menü elemanlarını fitrelemeden ekrana bas
    renderMenuItems(data.menu);
  } else {
    //? eğer hepsi seçneği seçilmediyse
    // ürünlerin arasında kategori ismi bizim seçtiğimiz
    // kategori ismine eşit olanları al
    const filtred = data.menu.filter(
      (item) => item.category === selectedCategory
    );

    // filtrelenen verileri ekran bas
    renderMenuItems(filtred);
  }
});
