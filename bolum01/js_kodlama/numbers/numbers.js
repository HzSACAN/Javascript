// number functions
let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10.6");
sonuc = parseFloat("10.6");
sonuc = parseInt("10a");
sonuc = parseInt("a10");

sonuc = isNaN("10"); // not a number (boolean değer döndürür)

let sayi = 47.1234567;

sonuc = sayi.toPrecision(5);

console.log(typeof sonuc);
console.log(sonuc);

sonuc = sayi.toFixed(5);

console.log(typeof sonuc);
console.log(sonuc);

sonuc = Math.round(2.4);
console.log(typeof sonuc);
console.log(sonuc);

sonuc = Math.round(2.6);

console.log(typeof sonuc);
console.log(sonuc);

sonuc = Math.ceil(2.6);

console.log(typeof sonuc);
console.log(sonuc);

sonuc = Math.floor(2.6);

console.log(typeof sonuc);
console.log(sonuc);

sonuc = Math.sqrt(49);

console.log(typeof sonuc);
console.log(sonuc);

sonuc = Math.pow(2, 3);

console.log(typeof sonuc);
console.log(sonuc);

sonuc = Math.abs(-10);

console.log(typeof sonuc);
console.log(sonuc);

sonuc = Math.min(4, 66, 8, 3, 9);

console.log(typeof sonuc);
console.log(sonuc);

sonuc = Math.max(4, 66, 8, 3, 9);

console.log(typeof sonuc);
console.log(sonuc);

sonuc = Math.random();

console.log(typeof sonuc);
console.log(sonuc);

sonuc = Math.floor(Math.random() * 10);

console.log(typeof sonuc);
console.log(sonuc);
