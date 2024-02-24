/*
 * Javascript'de api istekleri atmamızı sağlayan method
 * 1.parametre: api adresi (string)
 * 2.parametre: ayar objesi (nesne)
 */

console.log('merhaba');

// tarif bilgierin tamımını ekrana basar
const render = (recipes) => {
  // bütün tarif verilerini dön
  recipes.forEach((recipe) => {
    // herbir tarif için bu fonksiyon çalışır
    document.write(
      `<img width="100px" src="${recipe.image}" /> ` +
        recipe.name +
        '<br>'
    );
  });
};

//! Asenkron kodu yönetme
//* 1.Yöntem: then-catch
//* callback function
const getRecipe = () => {
  fetch('https://dummyjson.com/recipes', {
    method: 'GET',
  })
    //* api'dan gelen cevap olumluysa çalışır
    .then((cevap) => cevap.json())

    //* json'dan js formatına dönen veriye erişme
    .then((veri) => render(veri.recipes))

    //* api'dan gelen cevap olumsuzsa çalışır
    .catch((hata) => console.log('Cevap Olumsuz', hata));
};

getRecipe();















//* 2.Yöntem: async await
const getRecipe2 = async () => {
  try {
    const res = await fetch('https://dummyjson.com/recipes');
    const data = await res.json();
    render(data.recipes);
  } catch (err) {
    console.log('burda hata var', err);
  }
};

getRecipe2();
