let value = 100;

if (value >= 80 && value <= 100) {
    value = "A";
} else if (value >= 70 && value <= 80) {
    value = "B";
} else if (value >= 60 && value <= 70) {
    value = "C";
} else {
    value = "D";
}
console.log(value);

// && => AND semua kondisi harus terpenuhi
// || => OR salah satu kondisi harus terpenuhi

value = 50;
let compare = value >= 80 && value <= 100; // antara true or false
console.log(compare, "logic AND");

compare = value >= 80 || value <= 100; // antara true or false
console.log(compare, "logic OR");

compare = value != 50; // antara true or false
console.log(compare, "logic NOT");

// == => hanya membandingkan nilai nya saja
// === => membandingkan nilai dan tipe data nya

let x = 50;
let y = "50";

compare = x == y; // true, karena sama sama 50
console.log(compare, "==");

compare = x === y; // false, kenapa kok false? karena walaupun nilainya sama tetapi tipe data nya berbeda
console.log(compare, "===");

// nested condition
let number = 5;
if (number > 5) { // jika nilai lebih dari 5
    if (number % 2 === 0) { // jika nilai habis dibagi 2 adalah 0
        console.log("lebih besar dari 5 dan genap"); // maka tampilkan genap
    } else {
        console.log("lebih besar dari 5 dan ganjil"); // selain itu, tampilkan ganjil
    }
} else { // selain itu atau kurang dari 5
    if (number % 2 === 0) {
        console.log("lebih kecil atau sama dengan dari 5 dan genap");
    } else {
        console.log("lebih kecil atau sama dengan dari 5 dan ganjil");
    }
}