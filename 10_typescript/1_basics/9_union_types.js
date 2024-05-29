"use strict";
// Union Types (Birleşmiş Tipler)
// Bir değişkenin tipinin alabildiği birden fazla farklı türde veri varsa kullanılır
// Örn: Bir kullancı değişkeni var ama kullanıcı ismide id'si olaiblir isim string id number olucağından her iki tipte veri alma ihtimalide bulunuyor
let user;
user = "Ahmet";
user = 35;
let phone;
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
