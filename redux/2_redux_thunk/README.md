# Redux Thunnk

Reduxt hunk, redux kullanılan projelerde asenkron işlemleri kolaylaştırmak bileşen ieçrisndeki karışılığı azaltmak ve complex yapıyı bileşnin dışarısna taşımamıza olanak sağlar

Redux temel yapısı a ksiyonların senkron olması üzerine kuruludur. Yani bir eylem dispatch ile tetiklendiğinde bekleme süresi olmadan reducer'a ulaşmalı

Aasenkron işlemlerle uğraşmak istediğimizde, redux thunk devereye girer. Thunk , action oluşturan fonksiyonların basit bir nesne döndürmesi yerine fonksiyon döndrümesine izin verir. Bu sayede aksiyon oluşturan bu fonksiyonların içerisnde api istekleri atılabilir
