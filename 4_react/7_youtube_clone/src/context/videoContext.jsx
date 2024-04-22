import { createContext, useEffect, useState } from 'react';
import { categories } from '../constants';
import api from '../utils/api';

// 1) Context remeli oluştur
export const VideoContext = createContext();

// 2) Sağlayıcı bilşenini oluştur
export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // seçilen type'ı belirle
    const type = selectedCategory.type;

    // seçilen kategorinin type'ı menü ise fonksiyonu durdur
    if (type === 'menu') return;

    // yüklenmeyi true'ya çek
    setIsLoading(true);

    // istek atılacak url'i belirle
    const url =
      type === 'home'
        ? '/home'
        : type === 'trending'
        ? '/trending'
        : type === 'category'
        ? `/search?query=${selectedCategory.name}`
        : '';

    // api isteği at ve durumu state aktar
    api
      .get(url)
      .then((res) => setVideos(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [selectedCategory]);

  return (
    <VideoContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        videos,
        error,
        isLoading,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
