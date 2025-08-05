let toplam = 0;
for (let i = 0; i < 10; i++) {
  toplam += i;
}
console.log(toplam);

let sayilar = [1, 4, 8, 5, 4, 3];

let toplam2 = 0;
// for (let i = 0; i < sayilar.length; i++) {
//   toplam2 += sayilar[i];
// }
for (let i in sayilar) {
  toplam2 += sayilar[i]; // in index değerlerini döndürüyor döngüde
}
for (let sayi of sayilar) {
  toplam2 += sayi; // of direk dizideki elemanları döndürür
}
console.log(toplam2);

let user = {
  name: "Hazret Saçan",
  username: "HzSACAN",
  password: "123456",
  email: "asklanhazret51@gmail.com",
};

for (let key in user) {
  console.log(key);
  console.log(user[key]);
}
