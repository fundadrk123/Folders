let metin = 'Merhaba benim adim funda.Benim hobim bisiklet sürmektir';
console.log(bul(metin.toLowerCase()));

function bul(metin) {
    let kelimeler = metin.match(/\w+/g);
    console.log(kelimeler);

    let occurances = {};

    for (let kelime of kelimeler) {
        if (occurances[kelime]) {
            occurances[kelime]++;
        } else {
            occurances[kelime] = 1;
        }
    }

    console.log(occurances);

    let toplam = 0;
    let ençoktekraredenkelime = '';

    for (let kelime of kelimeler) {
        if (occurances[kelime] > toplam) {
            toplam = occurances[kelime];
            ençoktekraredenkelime = kelime;
        }
    }

    return ençoktekraredenkelime;
}