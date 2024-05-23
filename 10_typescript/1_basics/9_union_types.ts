// Union Types (Birleşmiş Tipler)
// Bir değişkenin tipinin alabildiği birden fazla farklı türde veri varsa kullanılır

// Örn: Bir kullancı değişkeni var ama kullanıcı ismide id'si olaiblir isim string id number olucağından her iki tipte veri alma ihtimalide bulunuyor

let user: string | number;
user = "Ahmet";
user = 35;

// Örn: bir telefonun verisini tutucaz ama ios telefonun değişken isimleri ve tipleri ile android telfonunki farklı

type iosType = {
  ios_version: number;
  airdrop_version: number;
  device: string;
};

type androidType = {
  android_version: string;
  google_play_version: number;
  device: string;
};

let phone: iosType | androidType;

phone = {
  ios_version: 16,
  airdrop_version: 15.6,
  device: "Iphone 15",
};

phone = {
  android_version: "marshmellow",
  google_play_version: 19.4,
  device: "Samsung Note 9",
};
