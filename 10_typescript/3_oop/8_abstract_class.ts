/*
 * Abstract Class (Soyut Sınıf):
 * Abstract class'lar sınıflar için birer şema görevi görür
 * Soyut sınıflar sayesinde, oluşturucağımız sınıfların özelliklerini, metholdarını ve bunların tiplerini belirleriz
 
 * Soyut sınıfların doğrudan örnekleri oluşturulamazlar
 * Alt sınıfların ortak davranışlarını tanımlamak için kullanırız  
 
 * Bir nevi sınıfların tipini tanımlarız
*/

abstract class TakePhoto {
  constructor(cameraMode: string, filter: string) {}

  // abstract method tanımlama
  // bir soyut method tanımlarken methodun görevini değil sadece tipini tanımlarız
  abstract share(send_to: string): void;
}

// Abstract class'ın özelliklerini ve methodlarını miras alan yeni bir class oluşturup. Oluşturduğumuz bu class'ın içersinde yarım kalan / görevi tanımlanmamış / implement edilmemiş metholdarın tanımlarız

class Instagram extends TakePhoto {
  constructor(cameraMode: string, filter: string) {
    super(cameraMode, filter);
  }

  share(send_to: string): void {
    // implement etmek > görevini tanımla
    console.log("Çekilen fotoğraf " + send_to + " ile paylaşılıyor");
  }
}

const insta = new Instagram("ön kamera", "gece filtresi");
insta.share("ali");

// soyut sınıfı 2. kez implement edelim
class Twitter extends TakePhoto {
  constructor(cameraMode: string, filter: string, tweet_id: number) {
    super(cameraMode, filter);
  }

  share(send_to: string): void {
    console.log(
      "çekilen fotoğraf tweet olarak paylaşıldı ve " +
        send_to +
        " kişisine gönderildi"
    );
  }
}
