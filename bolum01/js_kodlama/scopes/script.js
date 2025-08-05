var isim = "Ahmet"; // global scope

function yazdir() {
  var isim = "Ayşe";
  var yas = 20;

  console.log("function scope: ", isim, yas);
}
if (true) {
  var isim = "Zeynep";
  console.log(isim);
}

console.log(isim);

yazdir();

// fonksiyonlar kendi scope alanlarını oluştururlar
// var ile tanımladığımız değişkenler block içersinde (if gibi) yeni bir scope oluşturmaz
// let ve const ile oluşturursan değişkeni kendi scope'unu yaratır
