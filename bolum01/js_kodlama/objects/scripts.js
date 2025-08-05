let kullanici = {
  ad: "Hazret",
  soyad: "Saçan",
  yas: 23,
  adres: {
    il: "İstanbul",
    ilçe: "Ataşehir",
  },
  Okul: "İstanbul Medeniyet Üniversitesi",
};

let sonuc;

sonuc = kullanici.ad;
console.log(sonuc);

sonuc = kullanici["yas"];
console.log(sonuc);

sonuc = kullanici.adres.ilçe;
console.log(sonuc);

let urunler = [
  {
    urun_adi: "samsung s22",
    urun_fiyati: 15000,
  },
  {
    urun_adi: "samsung s23",
    urun_fiyati: 25000,
  },
];

sonuc = urunler[0].urun_adi;
console.log(sonuc);
