// veri ile alakalı her türlü yapıyı model'de tanımlarız
import api from './../../utils/api';
// model oluşturuken genelde class'ları tercih ederiz

export default class ListModel {
  // api'dan post verilerini alıp döndüren fonksiyon
  static async getPosts() {
    try {
      const res = await api.get('/posts');

      return res.data;
    } catch (err) {
      alert('Üzgünüz bir hata oluştu');
      console.log(err);
    }
  }
}
