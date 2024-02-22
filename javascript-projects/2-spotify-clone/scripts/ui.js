// Arayüz DOM işlemleri
export default class UI {
  constructor() {
    this.list = document.querySelector('#list');
    this.form = document.querySelector('#search-form');
    this.title = document.querySelector('#title');
    this.playArea = document.querySelector('.play-area');
    this.checkbox = document.querySelector('#mode-checkbox');
  }

  // liste alanına yükleniyor basar
  renderLoader() {
    this.list.innerHTML = `
    <div class="container">
        <div class="loader"></div>
    </div>
    `;
  }

  // ekrana kartları bas
  renderCards(songs) {
    // loadero ekrandan kaldır
    this.list.innerHTML = '';

    // dizideki her bir eleman için aşağıdaki fonksiyonu çalıştır
    songs.forEach((song) => {
      //1) elementi oluştur
      const div = document.createElement('div');

      //2) class ekleme
      div.className = 'card';

      //3) innerHTML'ini belirle
      div.innerHTML = `
            <figure>
              <img
                src="${song.images.coverarthq}"
              />
              <div id="play">
                <i id="play-btn" class="bi bi-play-fill"></i>
              </div>
            </figure>

            <h4>${song.title}</h4>
            <p>${song.subtitle}</p>      
      `;

      //4) data verileri ekle
      div.dataset.title = song.title;
      div.dataset.photo = song.images.coverarthq;
      div.dataset.url = song.hub?.actions[1].uri;

      //5) kartı html'e gönder
      this.list.appendChild(div);
    });
  }

  // başlığı günceller
  changeTitle(text) {
    this.title.innerText = text;
  }

  // müzk oynatma kısmını ekrana bas
  renderPlayingInfo(song) {
    this.playArea.innerHTML = `
      <div>
        <img
          class="animate"
          src="${song.photo}"
        />

        <div>
          <p>Şuan Oynatılıyor...</p>
          <h3>${song.title}</h3>
        </div>
      </div>

      <audio controls autoplay src="${song.url}"></audio>
    `;
  }
}
