/*
 * Access Modifiers - Erişim Beliteçleri

 * Class elemanları hassas bilegileri tutucakaları zaman bu bilgilerin class'ın dışından erişilip eşilmeyeceğini belirlemek isyebiliriz.

 * Örneğin kredi kartı bilgilerini tutan bir class olsun bu class'ın tutuğı bilgileri kod içerisnde her yerde kullanılşmasını önlemek isyebiliriz sebebi ise güvenlik zaafiyeti oluşturabileceği.

 * 3 adet erişim belirteci vardir
 
 * public: hem class dışarısından hemde class'ı extend eden diğer class'lardan eişlebilir

 * protected: sadece class'ın kendisi ve onu extend eden (miras alan) diğer class'lardan erişelebilir.

 * private: sadece tanımladığımız class içerisnde erişelebilir
*/

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

//! Public
var Arac = /** @class */ (function () {
    function Arac(yeni_marka) {
        this.marka = yeni_marka;
    }
    Arac.prototype.tanit = function () {
        console.log(this.marka); // class içerisinden
    };
    return Arac;
}());
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // miras alınan class
    Motor.prototype.calistir = function () {
        console.log(this.marka);
    };
    return Motor;
}(Arac));
var honda = new Arac("Honda");
console.log(honda.marka); // dışarıda da erişilebilir
// Protected
var EvcilHayvan = /** @class */ (function () {
    function EvcilHayvan(yeni_ad) {
        this.ad = yeni_ad; // tanımlandığı class içersiinden erişilebilir
    }
    return EvcilHayvan;
}());
var Kopek = /** @class */ (function (_super) {
    __extends(Kopek, _super);
    function Kopek() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Kopek.prototype.havla = function () {
        console.log(this.ad + " : hav hav"); // miras alan class'ta erişeebilir
    };
    return Kopek;
}(EvcilHayvan));
var boncuk = new Kopek("Boncuk");
boncuk.havla();
// console.log(boncuk.ad); protected olduğu için class dışında erişilemez
// Private
var OzelPersonel = /** @class */ (function () {
    function OzelPersonel(yeni_isim) {
        this.isim = yeni_isim; // tanımlandığı class'ın kendi içerisinde erişilebilir
    }
    return OzelPersonel;
}());

var GumrukPersonle = /** @class */ (function (_super) {
    __extends(GumrukPersonle, _super);
    function GumrukPersonle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GumrukPersonle.prototype.isminiYaz = function () {
        // console.log(this.isim); // miras alan class'ta erişilemiyor
    };
    return GumrukPersonle;
}(OzelPersonel));
var tayfur = new OzelPersonel("tayfur");
// console.log(tayfur.isim); // class'tan oluştruduğumuz örnekte'de erişemiyoruz
/*
 * NOT: Erişim belirteçeleri aynı bütün ts'e özel olan kodlarda olduğu gibi kodu derlediğimizde ortadana kaybolur yani bu belirteçler sadece geliştirme sürecini daha güvenli hale getirir
 */
