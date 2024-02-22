import API from './scripts/api.js';
import UI from './scripts/ui.js';

// class'ın bir örneğini oluşturma
const api = new API();
const ui = new UI();

// sayfanın yüklnme olayını izle
document.addEventListener('DOMContentLoaded', async () => {
  // 1) ekrana yüklenme gifi bas
  ui.renderLoader();

  // 2) api istek at
  await api.getPopular();

  // 3) gelen verileri ekrana bas
  ui.renderCards(api.songs);
});

// formun gönderilme olayını izle
ui.form.addEventListener('submit', async (event) => {
  // sayfayı yenilemeyi engelle
  event.preventDefault();

  // aratılan kelimeye eriş
  const query = event.target.searchInput.value;

  // kelime boşsa uyarı gönder
  if (!query.trim()) return alert('Lütfen aratılacak kelimeyi giriniz.');

  // ekrana yükleniyor bas
  ui.renderLoader();

  // başlığı güncelle
  ui.changeTitle(query + ' İçin Sonuçlar');

  // api'dan şarkıları al
  await api.searchMusic(query);

  // şarkıları ekrana bas
  ui.renderCards(api.songs);
});

// cartların alnına tıklanma olayını izleme
ui.list.addEventListener('click', (e) => {
  // tıklanılan eleman playBtn ise oynat
  if (e.target.id === 'play-btn') {
    // tıklanılan karttaki şarkının bilgilerini al
    const song = e.target.closest('.card').dataset;

    // şarkıyı oynatma kısmını ekrana bas
    ui.renderPlayingInfo(song);
  }
});

// lokalden mode verisini al
const mode = localStorage.getItem('mode');
('true');

document.body.className = mode === 'true' ? 'dark' : 'light';

ui.checkbox.checked = mode === 'true';

// checbox'ın değerinin değişimini izle
ui.checkbox.addEventListener('change', (e) => {
  // false > açık mod
  // true  > gece modu
  const isDarkMode = e.target.checked;

  // kulnacının seçtiği değeri kaybetmemk için localde tutucaz
  localStorage.setItem('mode', isDarkMode);

  document.body.className = isDarkMode ? 'dark' : 'light';
});
