let ogrenciler = ["hazret", "çınar", "ada", "yiğit", "birol"];

sonuc = ogrenciler.length;
console.log(sonuc);

// array to string
sonuc = ogrenciler.toString();
console.log(sonuc);

sonuc = ogrenciler.join(" ");
console.log(sonuc);

// eleman silme
sonuc = ogrenciler.pop(); // son eleman silinir ve silinen eleman geri döndürülür.
console.log(sonuc);
sonuc = ogrenciler.shift(); // ilk eleman silinir ve silinen eleman geri döndürülür.
console.log(sonuc);

//eleman ekleme
sonuc = ogrenciler.push("yagmur"); //dizinin sonuna eleman eklenir
console.log(sonuc);

sonuc = ogrenciler.unshift("gizem");

console.log(sonuc);
console.log(ogrenciler);

let markalar1 = ["mazda", "toyota"];
let markalar2 = ["opel", "renault"];
let markalar3 = ["mercedes"];

//sonuc = markalar1.concat(markalar2, markalar3);
//console.log(sonuc);

// 0. indeksten 1 tane eleman siler ve 0. indekse bmw ve audi eklenir.
sonuc = markalar1.splice(0, 1, "bmw", "audi");
console.log(sonuc);
console.log(markalar1);
