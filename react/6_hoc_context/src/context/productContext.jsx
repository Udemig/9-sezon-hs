/*
 * Context API
 * Uygulamada birden çok bileşenin ihtiyacı olan
 * verileri bileşenlerden bağımsız bir şekilde
 * konumlanan merkezerde yönetmeye yarar
 
 * Context yapısı içerisnde verilerin state'ini ve 
 * verileri değiştirmey yarayan fonksiyonları tutabilir  

 * Context, tutuğumuz state'leri bileşenlere doğrudan aktarım ypabilen state yönetim aracıdır
*/
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import api from '../utils/api';

//* 1) Context yapısnın temelini oluştur
export const ProductContext = createContext();

//* 2) Verileri bileşenlere aktarıcak olan sağlayıcıyı ve onun tuttuğu verileri tanımlama
export function ProductProvider({ children }) {
  // ürünler verisi
  const [products, setProducts] = useState();

  // gösterilecek kategorinin verisi
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // hangi adrese istek atılacağını belirle
    const url =
      selectedCategory === 'all'
        ? '/products' // bütün ürünler
        : `/products/category/${selectedCategory}`; // bir kategoriye ait ürünler

    // api isteği at
    api.get(url).then((res) => setProducts(res.data));
  }, [selectedCategory]);

  //* 3) Sağlayıcı fonksiyonları mutlaka Provider'ı return etmeli ve App'i sarmalamalı
  //* Value olarak eklene değerler projedeki bileşenler tarafından erişlebilir olur
  return (
    <ProductContext.Provider
      value={{ products, selectedCategory, setSelectedCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
}
