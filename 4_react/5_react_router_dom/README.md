# Routes

-Tarayıcıdaki url'i izler url her değiştiğinde url'deki yol tanımladığımız route'lardan birini path değeri ile eşlşiyor mu kontrol eder eşelşirse o route'un elementini ekrana basar

# Link

- Proje içerisnde yönlendirme işlemlerinde a etiketi yerine kullanılır
- Href yerine to değeri yönlendirilicek olan sayfayı belirler

# Navlink

- Link etiketi ile aynı görevi yapar
- Eğerki kullanıcınn bulunduğu sayfa linkin to değeri eşleşirse o linke active class'ı verir.

# useParams

- url'de tanımlı olan yol parametrelieni bir nesne şeklinde döndürür

# useNavigate

- kullanıcyı yönlendirme işlemini yapan fonksiyona erişimimizi sağlar.
- link etiketiyle aynı şekilde yönlendirme işini yapar.
- bir fonksiyon içerssinde yönlendirme yaparken link tercih edemeyiceğimiz için useNavigate'i kullanırız
- kullanırken önce import edilmeli ardında useNavigati çağrılıp içerisndeki yönlendirmeye yarayan fonksiyon erişilmeli
