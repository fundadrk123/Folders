// function MükemmelSayi(Number) {
//     let toplam = 0;
//     for (let i = 2; i <= Number / 2; i++) {
//         if (Number % i == 0) {
//             toplam += i;
//         }
//     }
//     toplam += 1 + Number;

//     if (toplam == Number * 2) {
//         console.log("Mükemmel sayıdır.");
//     } else {
//         console.log("Mükemmel sayı değildir.");
//     }
// }
// MükemmelSayi(6);

// let sayi = 1;
// for (let sayi = 1; sayi <= 1000; sayi++) {
//     let toplam = 0;
//     for (var i = 1; i < sayi; i++) {
//         if (sayi % i == 0)
//             toplam += i;
//     }
//     if (toplam == sayi)
//         console.log(sayi + "Mükemmel bir sayidir");
// }