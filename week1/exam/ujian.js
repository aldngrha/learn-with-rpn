// ***DISINI KALIAN AKAN MEMBUAT ALGORITMA KALIAN SENDIRI SESUAI PERMASALAHAN YANG ADA DIBAWAH***
// ***KERJAKAN DENGAN SESUAI TEST-CASE NYA***
//
//
// soal

// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka.
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya.
// Jika kedua angka bernilai sama, function akan me-return -1.

function bandingkanAngka(angka1, angka2) {
  //code disini
  if (angka1 < angka2) {
    return true
  } else if (angka1 === angka2) {
    return -1
  } else {
    return false
  }
}

  // TEST CASES
  console.log(bandingkanAngka(5, 8)); // true
  console.log(bandingkanAngka(5, 3)); // false
  console.log(bandingkanAngka(4, 4)); // -1
  console.log(bandingkanAngka(3, 3)); // -1
  console.log(bandingkanAngka(17, 2)); // false


// ------------------------------------
console.log('')
// ------------------------------------

// Problem
// Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string.
// Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".

function balikKata(kata) {
    // you can only write your code here!
    let balikKata = "";
    for(let i  = kata.length - 1; i >= 0; i--) {
      balikKata += kata[i]
    }
    return balikKata;
}

  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS

// ------------------------------------
console.log('')
// ------------------------------------

// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut.
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
  // you can only write your code here!
  let hour = Math.floor(menit / 60); // menit dibagi 60, lalu di bulatkan ke bawah
  let remainingMinute = menit % 60; // sisa bagi dari 60 atau kelipatan 60 untuk mengambil sisa menitnya
  let minuteString = remainingMinute; //init minuteString dengan nilai sisa menit
  if (remainingMinute < 10) { // jika sisa menit kurang dari 10, maka tambhakan string 0 di depannya
    minuteString = `0${remainingMinute}`
  }
  return `${hour}:${minuteString}` //kembalikan nilai jam dan menitnya
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

// ------------------------------------
console.log('')
// ------------------------------------

//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
  // you can only write your code here!
  let x = 0; // init x dengan nilai awal 0
  let o = 0; // init o dengan nilai awal 0
  for (let i of str) { // iterasi nilai dari parameter str, maksudnya ambil satu persatu dari nilai str dan disimpan ke dalam variable i
    if (i === 'x' || i === "X") { // jika i sama dengan x atau i sama dengan X
      x++ // tambah 1 atau dinaikan atau diincrement
    } else if (i === 'o' || i === 'O') { // selain itu, kalau i === o atau i === O
      o++ // tambah 1 juga
    }
  }
  return x === o // kembalikan nilainya, apakah jumlah x sama dengan jumlah o
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true