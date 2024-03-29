# Vite Projesi İçin Adımlar

- `npm create vite klasör_ismi` > belirttiğimiz isimde bir klasör oluşturur ve içerisne vite projesi kurar

- `npm create vite@latest .` > terminalin bulunduğu klasöre vite projesi kurar

- npm intall > node modules indir

- npm run dev > projeyi ayağa kaldır

# Vite Artıları

- Proje oluşturma / Ayağa Kaladırma gibi işlemleri daha hızlı geçekleştirir.

- Gereksiz kodlardan / dosylardan arınmış bbir react projesi oluşturur

- Build işlemi çok daha hızldır.

# Değişenler

- App.js ve index.js dosyları App.jsx ve main.jsx isimlerini aldı.

- Projeyi ayağa kadlırırken kullandığımız npm start komutunun yerini npm run dev aldı.

# JSON-SERVER

- Kendi bilgisayarımızda çalışan fake API oluşturmaya yarar.

- Kendimizi geliştirmek için yazdığımız basit projelerin backend ihityacını karşılar (proje yayınlanamaz çünkü api fake ve sadeece bizim bilgisayarımızda çalışıyor).

- Hızlı Prototipleme: Örn Backend dev. api'ı oluşturdğu sürede frontende tarafında geliştrmeler yapabilmek için hızlı bir şekilde fake api prototipi oluşturup frontend ilerletebilir.

- Json-server ile oluştruğuğumuz api'a büttün http methodları ile istek atılabilir.

- Yaptığımız istek sonucunda eğer verilerde bir değişim olursa anlık olarak veilerin tutulduğu db.json dosyası güncellenir.

# Kurulum

- npm i json-server
- proje klasöründe db.json dosysı oluştur ve güncelle
- package.json'a server'I ayağa kaldırma komutunu ekle

# Axios

- HTTP istekleri için modern çözüm
- Yerleşik değil pakedini indirmek gerekli
- isteklerde fetche göre daha az kod yazarız
- hataları ve istek detaylarını daha detaylı bir şekilde gösterir
- body kısmında alınan verileri otomatik olarak işler.
- veri gönderiken otomatk olrak js verisini json verisine çevirir
- isteği iptal etme özelliği
- zaman aşımı eklenebilir

## GET İsteği

### Fetch

```js
fetch('http://localhost:3000/todos')
  .then((res) => res.json())
  .then((data) => setTodos(data));
```

### Axios

```js
axios.get('http://localhost:3000/todos').then((res) => setTodos(res.data));
```

## POST İsteği

### Fetch

```js
fetch('http://localhost:3000/todos', {
  method: 'POST',
  body: JSON.stringify(newTodo),
});
```

### Axios

```js
axios.post('http://localhost:3000/todos', newTodo);
```

## PATCH İsteği

### Fetch

```js
fetch(`http://localhost:3000/todos/${todo.id}`, {
  method: 'PATCH',
  body: JSON.stringify({ title, status }),
});
```

### Axios

```js

```

## Get İsteği

### Fetch

```js

```

### Axios

```js

```
