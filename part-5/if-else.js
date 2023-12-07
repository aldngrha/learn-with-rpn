let nilai = 50;

// if (nilai > 50) {
//   console.log("lulus");
// } else {
//   console.log("tidak lulus");
// }

console.log(nilai >= 50);

if (nilai >= 50) { // jika nilai lebih dari sama dengan 50, maksudnya dari 0-50
    console.log("lulus pintar"); // maka print string 'lulus pintar'
} else if (nilai >= 40) { // jika nilai lebih dari sama dengan 40
    console.log("tidak lulus"); // maka print string 'tidak pintar'
} else { //kondisi lainnya
    console.log("tidak lulus pake banget");
}