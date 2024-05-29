"use strict";
// Yukarıdaki tipe göre bir veri oluşturalım
const faruk = {
    id: 1,
    firstname: "Faruk",
    lastname: "Kaya",
    age: 45,
    adress: {
        city: "İstanbul",
        street: "4545sk",
        zipCode: 35560,
    },
    education: {
        degree: "56",
        school: "İstanbul Üni",
        gradutionYear: 2023,
        isGraduated: true,
    },
    jobs: [
        {
            company: "X Şirketi",
            startDate: new Date(),
            title: "Frontend",
        },
    ],
    sayHello() {
        return "Merhabalar Ben " + this.firstname + " " + this.lastname;
    },
};
console.log(faruk.sayHello());
const spotify = {
    api: "www.spotify.com",
    play(song) {
        console.log("spotifydan veri çekiliyor");
        console.log(song + " çalıyor");
    },
    pause() {
        console.log("Çalan şarkı durduruldu");
    },
};
// Class tanımı yaparken interface kullanılım
class AppleMusic {
    constructor() {
        this.api = "www.apple.com";
    }
    play(song) {
        console.log("apple müzikten veri çekiliyorçç");
        console.log(song + " çalıyor");
    }
    pause() {
        console.log("Çalan şarkı durduruldu");
    }
}
