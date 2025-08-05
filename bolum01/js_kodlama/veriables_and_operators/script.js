console.log("Merhaba");
var urunAdi = "İphone";
let urunFiyat = 35000;

console.log(typeof urunAdi);
console.log(typeof urunFiyat);

let sayi1 = "47";
let sayi2 = "31";

console.log(Number(sayi1) + Number(sayi2));

let sayi3 = 47;
let sayi4 = 31;

console.log(sayi3.toString() + sayi4.toString());

let ogr1_dogumTarihi = 2002;
let suankiYil = new Date().getFullYear();

let ogr1_yas = suankiYil - ogr1_dogumTarihi;

console.log("1. öğrencinin yaşı: " + ogr1_yas);
