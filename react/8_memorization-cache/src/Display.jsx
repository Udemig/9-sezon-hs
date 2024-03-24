import React from "react";

/*
Sorun:
Şuan display bileşenin içeriği değişmeyecek olsa dahi
üst bileşen olan (newExample) render edilidğinde bu bileşende
gereksiz yere tekrardan render oluyor.
Gerçek bir projedeki kapsamlı bir sayfa olsaydı gereksiz yere
render redilmesi performans sorunnlarına yol açabilirdi.
*/

const Display = ({ count, updateCount }) => {
  console.log("display bileşeni render edildi");

  return (
    <div
      style={{
        background: "crimson",
        padding: "5px",
        margin: "15px",
        borderRadius: "10px",
      }}
    >
      <h3>Sayacın Değeri ({count})</h3>

      <button style={{ marginTop: "30px" }} onClick={updateCount}>
        Sayacı Arttır
      </button>
    </div>
  );
};

/*
Çözüm:
React.memo, react uygulamlarında performans optimizasyonu
sağlamak için kullanılır.
Bu fonksiyon bir önceki render sonucunu hafızada tutar.
tekrar render edilmesi gerektiğinde eğer bileşenin aldığı
proplar değişmediyse tekrar render işlemi yapıp bileşeni ekrana 
basmak yerine önceki renderdan elde ettiğimiz sonucu kullanırız.
*/

export default React.memo(Display);

/*
memo çalışma mantığı:
beileşeni render edip render sonucu oluşan html'i hafızada tutar
daha sonra üdt bileşen render olduğunda ve alt bileşeninde render
olması gerektiğinde eğer alt bileşene gönderilen proplar değişmediyse
o zman alt bileşenin tekrardan render etnez daha önceki renderda oluşan
html'i kullanır. 
Ama proplar farklıysa bileşeni tekrar render eder cache'deki veriyi günceller


çalışma aşamasındaki açık:
string , number , boolean gibi proplarda sorun çıkmasada
function proplarının değişim değişmediğini tespit etmekte sorun yaşar
*/
