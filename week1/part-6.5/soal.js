// Soal1
// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("WHILE LOOP")
console.log("LOOPING PERTAMA MAJU")
let i = 0;
while (i <= 10) {
    console.log(i)
    i++
}

console.log("LOOPING KEDUA MUNDUR")
let j = 10;
while (j >= 0) {
    console.log(j)
    j--
}

console.log("_________________________")
console.log("")

// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("FOR LOOP")
console.log("LOOPING PERTAMA MAJU")
for(let i = 0; i <= 10; i++) {
    console.log(i)
}

console.log("LOOPING KEDUA MUNDUR")
for(let i = 10; i >= 0; i--) {
    console.log(i)
}

console.log("_________________________")
console.log("")

// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

console.log("Genap Gnjil")
let number = 100
for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
        console.log(`${i} adalah Genap`)
    } else {
        console.log(`${i} adalah Ganjil`)
    }
}
console.log("_________________________")
console.log("")

//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

console.log("COUNTER KELIPATAN 3")
for (let counter = 1; counter <= 100; counter+=2) {
    if (counter % 3 === 0) {
        console.log(`${counter} kelipatan 3`)
    }
}
console.log("COUNTER KELIPATAN 6")
for (let counter = 1; counter <= 100; counter+=5) {
    if (counter % 6 === 0) {
        console.log(`${counter} kelipatan 6`)
    }
}
console.log("COUNTER KELIPATAN 10")
for (let counter = 1; counter <= 100; counter+=9) {
    if (counter % 10 === 0) {
        console.log(`${counter} kelipatan 10`)
    }
}
console.log("_________________________")
console.log("")

// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****
console.log("BINTANG ASTERIKS")
let result = '';
for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);
