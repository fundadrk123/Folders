// let metin = "Şuanda evde pc başında tekrar eden harf uygulaması yapmaktayım,";
// let harf = prompt("harf giriniz");
// let sonuc = bul(harf);
// alert("harf sayısı" + sonuc);

// function bul(harf) {
//     let toplam = 0;
//     for (let i = 0; i < metin.length; i++) {
//         if (metin.charAt(i).toLowerCase() === harf) {
//             toplam += 1;
//         }
//     }
//     return toplam;
// }

let metin = "Şuanda evde pc başında tekrar eden harf uygulaması yapmaktayım,";

bul("ş");

function bul(harf) {
    let toplam = 0;
    for (let i = 0; i < metin.length; i++) {
        if (metin.charAt(i).toLowerCase() === harf) {
            toplam += 1;
        }
    }
    console.log("Harf sayısı :" + toplam);
}