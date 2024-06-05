// Fonksiyon bizden parametre olarak gönderilen araba için aracın fotoğraf url'ini
// temel url: https://cdn.imagin.studio/getimage
// aracın bilgilerini dinamik olarak url'e ekliyecez
// sonuç: https://cdn.imagin.studio/getimage?customer=hrjavascript-mastery&make=bmw&modelFamily=m3&zoomType=fullscreen

import { colors } from "../constants";
import { CarType } from "../types";

const generateImage = (car: CarType, angle?: string): string => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model.split("/")[0]);
  url.searchParams.append("zoomtype", "fulscreen");

  // eğer açı verildiyse onuda ekle
  if (angle) {
    url.searchParams.append("angle", angle);
  }

  // rastegle bir renk seç
  const i = Math.floor(Math.random() * colors.length);
  url.searchParams.append("paintId", colors[i]);

  return url.href;
};

export default generateImage;
