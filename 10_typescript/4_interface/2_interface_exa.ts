interface IAdress {
  city: string;
  street: string;
  zipCode: number;
}

interface IEducation {
  degree: string;
  school: string;
  gradutionYear?: number;
  isGraduated: boolean;
}

interface IJob {
  company: string;
  startDate: Date;
  title: string;
}

interface IPerson {
  id: number;
  firstname: string;
  lastname: string;
  age: number;

  adress: IAdress;

  education: IEducation;

  jobs?: IJob[];

  sayHello(): string;
}

// Yukarıdaki tipe göre bir veri oluşturalım
const faruk: IPerson = {
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

// Interface'leri sadece nesnelerde değil class'ların tipini tanımlarkende kullanbiliriz
interface IMusicPlayer {
  api: string;

  play(song: string): void;
  pause(): void;
}

const spotify: IMusicPlayer = {
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
class AppleMusic implements IMusicPlayer {
  api = "www.apple.com";

  play(song: string): void {
    console.log("apple müzikten veri çekiliyorçç");
    console.log(song + " çalıyor");
  }

  pause(): void {
    console.log("Çalan şarkı durduruldu");
  }
}
