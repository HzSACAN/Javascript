let simdi = new Date(); // şimdiki tarih ve saat bilgisi

// Get methods
sonuc = simdi;
console.log(sonuc);

sonuc = simdi.getDate();
console.log(sonuc);

sonuc = simdi.getDay(); // 0: pazar, 6: cumartesi
console.log(sonuc);

sonuc = simdi.getFullYear();
console.log(sonuc);

sonuc = simdi.getHours();
console.log(sonuc);

sonuc = simdi.getTime();
console.log(sonuc);

// Set Methods

// bu kullanımda şimdi nesnesi değiştirilir ve fonksiyon çağrısı zaman damgası(timestamp-ms) döner ve değişkene bu zaman damgası atılır.
sonuc = simdi.setFullYear(2026);
console.log(sonuc);

// bu kullanımda ise şimdi nesnesi değiştirilir ama dönüş değeri kullanılmaz.
simdi.setFullYear(2026);
sonuc = simdi; // sonuç değişkenine Date nesnesinin kendisi eşitlenir.
console.log(sonuc);

simdi.setMonth(9); // 0; Ocak ... 9; Ekim
sonuc = simdi;
console.log(sonuc);

simdi.setDate(19);
sonuc = simdi;
console.log(sonuc);

let dogum_tarihi = new Date(2002, 2, 3);

sonuc = simdi.getFullYear() - dogum_tarihi.getFullYear();
console.log(sonuc);
