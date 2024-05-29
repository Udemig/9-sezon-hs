// Soyut Sınıf
abstract class DataFetcher {
  constructor(apiURL: string) {}

  // soyut methodlar
  abstract getData(apiKey: string): object[];
  abstract deleteData(id: string, apiKey: string): void;
}

// Soyut sınıfı miras alan yeni bir sınıf oluşturucaz
// SInıfın içerisindeki yarım kalan abstract methodları tanımlıyıcaz (implement etme)
class Spotify extends DataFetcher {
  // soyut sınıfta tipi tanımlanmış ama görevi tanımlamamş methodları implement edelim
  getData(apiKey: string): object[] {
    console.log("api ile haberleşiyor...");

    const res = {
      ok: true,
      status: 200,
      data: [{ name: "Müzik 1" }, { name: "Müzik 2" }],
    };

    return res.data;
  }

  deleteData(id: string, apiKey: string): void {
    console.log(id + "id li eleman için silme isteği atıldı");
  }
}

const spotify = new Spotify("www.api.spotify.com");

console.log(spotify.getData("adlpgn3123"));
spotify.deleteData("12", "adlpgn3123");
