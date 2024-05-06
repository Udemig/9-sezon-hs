# Selectors

- Elementleri seçmeye yararyan methodlar
- https://testing-library.com/docs/ecosystem-testing-library-selector/

# Matchers

- Expect ile kullanılan ve Element üzerindeki beklentimizi ifade eden methodları.
- ELEMENTLER İÇİN: https://github.com/testing-library/jest-dom
- DİĞER: https://jestjs.io/docs/using-matchers

# HTML Element Rolleri

- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles

# Kütüphaneler

- json-server
- bootstrap
- axios@^0.27.2
- @testing-library/user-event@14.0

# Test Geliştirme Süreci

## TDD (Test Driven Development)

- red to green test
- Önce bileşenin testleri yazılır daha sonra bileşen kodlanır
- Artısı, testler bir yük gibi gelmiyor. Geliştirme sürecinnin bir parçası oluyor. Testleri yazarken dinamik yapının algoritmasını olduşturduğumuz için işlevi daha hızlı kodlayabiliyoruz

## BDD (Behaviour Driven Development)

- Önce özellik / bileşen geliştirilir daha sonra testleri yazılır

# FireEvent

- rtl içerisinde gelen olay tetikleme methodu
- gerçek kullanıcıdan uzak tepkiler verdiği için yerini userEvent'e bıraktı
- tetiklene olaylar gerçek bir inasının tepkisinden çok daha hızlı bir şekilde aniden tetiklendiği için testlerde tutarsızlıklara sebep olabiliyor

# UserEvent

- bu yolu kullanmak için userEvent paketi indirilmeli
- fireEvent'in morden daha gelişmiş versiyonu
- tetiklediğimiz olaylar gerçek kullanıcın yapıcağı gibi bir gecikmenin ardından gerçekleşir
- gecikme olduğunda async await kullanırız
