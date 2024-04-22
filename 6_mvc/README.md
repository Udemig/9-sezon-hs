# Kütüphaneler

- axios
- json-server
- react-router-dom
- tailwind

# MVC (Model - View - Controller)

- Model:

* Genellikle class yapısı ile tanımlanır
* Uygulamanın veir mantığını ve yapısını temsil eder
  Örn:
* Bileşende tutulacak state'in başlangıç değeri
* Veriyi formatlamaya yarayan fonksiyon
* API istekleri tutulabilir

- View:

* Son kullanıcının gördüğü tasarımdır.
* Bileşenin return satırına yazdığımız jsx elementleri burada tanımlanır.

- Controller:

* View ile model arasındaki bağlantıyı sağlar
* Kullanıcı etkileşimiyle tetiklenicek bütün fonksiyonlar burada tanımlanır

# MVC Klasör Yapısı

# 1.Yöntem

- src
- - pages
- - - List
- - - - ListController.jsx
- - - - ListModel.js
- - - - ListView.jsx

- - - User
- - - - UserController.jsx
- - - - UserModel.js
- - - - UserView.jsx

# 2. Yötem

- src
- - models
- - - ListModel.js
- - - UserModel.js

- - views
- - - ListView.jsx
- - - UserView.jsx

- - controllers

- - - UserController.jsx
- - - ListController.jsx
