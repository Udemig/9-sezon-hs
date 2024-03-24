# State Yönetimi

- State: Uygulamadaki bileşenlerin sahip olduğu bilgi ve özellikler.

- Prop Drilling: Bileşnlerin yukarında aşağıya veri taşıması.

- Context: Uygulamadki state'i bütün bileşenler tarafından erişlebilen ve oluşturdğumuz merkezlerden yönettiğimiz state yönetim aracı.

- Redux: Bileşenlerin sahip olduğu ve merkezi olarak tutlması gereken state'lerin yönetildiği merkezi state yönetim aracı.

# Neden Context yerine Redux ?

- Kod tekrarını önler
- Permansı daha iyi
- Bileşen içerismdeki karışıklığı azaltır
- Hata ayıklama daha kolaydır
- Orta ve büyük ölçekli projelerde state yönetmini daha kolay hale getirir

# Redux ile ilgili bilinmesi gerekenler

1. Store: Uygulamanın bütün bileşenleri tarafında erişlebilen ve yönetilebilen state deposu

2. Reducer: Akisyondan aldığı talimata göre store'da tutulan state'in nasıl değişceğine karar veren fonksiyon

3. Action: Store'daki state'i güncellemek için reduce'a gönderdiğimiz nesne. (emir | haber | eylem)

- - Action iki değere bir nesnedir:
- - type (zorunlu): Action'ın görevini tanımlayan string
- - payload (opsiyonel): Action'ın verisi

4. Dispatch (Sevketmek): Action'un gerçekleştiğ'ini reducer'a haber veren method

5. Subscribe (Abone Olmak): Bileşen'leirn store'da tutalan veriye erişimini sağlaması. (useContext,useSelector)

6. Provider (Sağlayıcı): Store'da tutuylan veileri uygulamaya sağlar.

# Gerçek Hayattan Benzetme

1. Store: Okul Binası

2. Reducer: Okulun Yönetim Ekibi (Müdür, Müdür Yard.)

3. Action: "Öğrenci Sınavı Geçmesi" | "Yeni Öğrencini Kayıt Yapması" | "Öğrencinin Okuldan Atılması"

4. Dispatch (Sevketmek): Öğrenci İşleri | Öğretmen

5. Subscribe (Abone Olmak): Rehberlik Servisi | E-Okul

6. Provider (Sağlayıcı): Okul Aile Birliği | MEB

# Redux Kurulum Aşamaları

1. `redux` ve `react-redux` paketlerini indir
2. reducer / reducer'ların kurlumunu yap
3. store'un kurlumunu yap
4. store'u projeye tanıt
