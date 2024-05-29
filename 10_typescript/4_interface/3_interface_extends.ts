/*
 * Interfaceler typeda olduğu gibi farklı bir/birkaç interfacein özelliklerini miras alabilir. Bunu extends anahtar kelimesi ile yapar. İstersek birden fazla interface'in özelliklerini miras alabiliriz.
 */

interface EvEsyasi {
  isim: string;
  fiyat: number;
}

// Burada EvEsayasi interface'inin tiplerini Mobilya interface'ine miras aldık
interface Mobilya extends EvEsyasi {
  renk: string;
}

const masa: Mobilya = {
  isim: "Yemek Masası",
  fiyat: 20000,
  renk: "siyah",
};

interface Elektronik {
  marka: string;
  garantiSuresi: number;
}

// Birden fazla interface'i miras alma
interface Urun extends Elektronik, Mobilya {}

const tv: Urun = {
  marka: "LG",
  isim: "Smart TV",
  garantiSuresi: 2,
  renk: "beyaz",
  fiyat: 35999,
};
