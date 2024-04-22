import * as yup from 'yup';

// validasyon şeması
// inputlardaki değerlerin geçerli olabilmesi için gerekli olan koşullar

// metin içerisnde en az
// 1 büyük harf
// 1 küçük harf
// 1 sayı
// 1 özel karakter
// olma durumunu kontrol eder
const regex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';

export const schema = yup.object().shape({
  // bir alan ismi ve o alanın geçerli olması için gerekli olan koşullar tanımlanmalı
  // not: bütün yup kontrol methodları paramtere olarak hata mesajını alır

  email: yup
    .string()
    .email('Email geçerli bir formatta değil')
    .required('Email zorunlu bir alan'),

  // yaş alanının geçerli olması için gerekli koşullar
  age: yup
    .number()
    .min(18, "Yaş 18'den küçük olamaz")
    .max(100, "Yaş 100'den büyük olamaz")
    .integer('Lütfen tam sayı değeri giriniz')
    .required('Yaş zorunlı bir alan'),

  // şifre alanı için koşulları belirle
  password: yup
    .string()
    .min(5, 'Şifreniz en az 5 karakter olmalı')
    .matches(regex, 'Şifreniz yeterince güçlü değil')
    .required('Şifre zorunlu bir alan'),

  // şifre onay alanı için koşullar
  passwordConfirm: yup
    .string()
    // oneOf() kontrol ettiğimiz inputtaki verinin belirlediğimiz değerlerden biriyle eşit olmasını bekler
    // ref() farklı bir inputtaki veriyi çağırmamızı sağlar
    .oneOf([yup.ref('password')], 'Doğrulama şifreniz asıl şifreyle eşleşmiyor')
    .required('Lütfen şifrenizi doğrulayın'),

  // todo checbox için koşul belirle
  // terms: yup.boolean().oneOf([true], 'Koşulları onaylamadan kayıt olamazsınız'),
});
