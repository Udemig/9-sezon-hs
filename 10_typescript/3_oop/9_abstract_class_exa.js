"use strict";
// Soyut Sınıf
class DataFetcher {
    constructor(apiURL) { }
}
// Soyut sınıfı miras alan yeni bir sınıf oluşturucaz
// SInıfın içerisindeki yarım kalan abstract methodları tanımlıyıcaz (implement etme)
class Spotify extends DataFetcher {
    // soyut sınıfta tipi tanımlanmış ama görevi tanımlamamş methodları implement edelim
    getData(apiKey) {
        console.log("api ile haberleşiyor...");
        const res = {
            ok: true,
            status: 200,
            data: [{ name: "Müzik 1" }, { name: "Müzik 2" }],
        };
        return res.data;
    }
    deleteData(id, apiKey) {
        console.log(id + "id li eleman için silme isteği atıldı");
    }
}
const spotify = new Spotify("www.api.spotify.com");
console.log(spotify.getData("adlpgn3123"));
spotify.deleteData("12", "adlpgn3123");
