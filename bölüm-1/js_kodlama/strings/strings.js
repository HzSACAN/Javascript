let ad = "Hazret";
let soyad = "Saçan";
let yas = 23;
let sehir = "İstanbul";

// ternary operators
let emeklilik =
  65 - yas > 0
    ? "Emekliliğe " + (65 - yas) + " yıl kaldı."
    : "Zaten emekli oldum.";

// backthick
let mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. ${emeklilik}`;

console.log(mesaj);

let kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi.";
let sonuc;

sonuc = kursAdi.toLocaleLowerCase();
console.log(sonuc);

sonuc = kursAdi.toUpperCase();
console.log(sonuc);

sonuc = kursAdi.length;
console.log(sonuc);

sonuc = kursAdi[7];
console.log(sonuc);

sonuc = kursAdi.slice(0, 6);
console.log(sonuc);

sonuc = kursAdi.replace("Eğitimi", "Kursu");
console.log(sonuc);

sonuc = kursAdi.trim();
console.log(sonuc);

sonuc = kursAdi.indexOf("Komple");
console.log(sonuc);

sonuc = kursAdi.split(" ");
console.log(sonuc);

sonuc = kursAdi.split(" ")[2];
console.log(sonuc);

sonuc = kursAdi.includes("Web");
console.log(sonuc);
