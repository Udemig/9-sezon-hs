import { getPopular } from './scripts/api.js';

// sayfanın yüklnme olayını izle
document.addEventListener('DOMContentLoaded', () => {
  getPopular();
});
