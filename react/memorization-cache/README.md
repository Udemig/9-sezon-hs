# Memorization

- Memorization bir optimizasyon tekniğidir.
  daha önce hesaplanmış bir veriyi yada daha önce render edilmiş bir bileşen tekrardan gerektiğinde yeniden hesaplama yapmak yerine ilk hesağlamadaki verileri saklarız ve saklana verileri kullanırız. Bu sayda gereksiz hesaplamaaların önüne geçmiş oluruz. Perfomansı arttırız. Sayfa yüklenme sürelerini kısaltırız.

- Reac'ta memorizatiın adına 3 hook bulunur.

# useMemo()

- Daha önce yapılan hesaplmaların sonuçlarını hafızada tutar.
- Bu sayda her render sırasında tekrar hesaplama yapmak yerine daha önceki yapılan ve ararbellekte tutaln hesaplama sonucunu alarak gereksiz hespalamaların önüne geçer

# useCallback()

- Daha önce oluşturulan bir fonksiyonu hazfızada tutar.

# React.memo()

- Daha önce ekrana basılan bir bileşeni hafızada tutar.
