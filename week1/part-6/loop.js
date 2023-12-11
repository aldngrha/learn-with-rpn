// while loop

// let i = 0; //inisialisasi nilai i
// while (i < 5) { //cek apakah i lebih kecil dari 5 ?
//     console.log(i) // jika ya, maka tampilkan nilai i
//     i++ // lalu tambahkan nilai saat ini dengan 1
// }

// for loop
// for (let i = 0; i <= 10; i++) { // inisialisasi nilai i, kemudian tentukan kondisinya, kemudian tambahkan 1 setiap iterasi
//     console.log(i) // tampilkan nilai i setelah kondisi terpenuhi
// }

let name = "aldi"
let result = ""
for (let i = name.length - 1; i >= 0; i--) {
    result += name[i]
}

console.log(result)

// jadi alurnya seperti ini, i = 0, jika 0 < 10, maka tampilkan 0, begitu seterusnya hingga nilai i = 10,
// dan di kondisinya adalah 10 <= 10 maka nilai 10 akan di tampilkan karena ada =

//nested loop
// for (let i = 0; i < 3; i++) { // tampilkan nilai iterasi dari i, jika nilai dari j sudah terpenuhi
//     for (let j = 0; j < 3; j++) {
//         console.log(`Nilai i = ${i}, Nilai j = ${j}`) // tampilkan nilai dari i sekarang adalah berapa,
//         // dan nilai j sekarang hingga selesai di iterasi
//     }
//     console.log("") //setelah nilai j terpenuhi, print string kosong
//}
//menurut pandangan saya, nilai i akan tetap sama sebelum nilai j selesai di iterasi, jadi misal nilai i = 0, maka akan terus 0
// sampai nilai j selesai, misal nilai j = 0, lalu j = 1, lalu j = 2, nah setelah j terpenuhi, selanjutnya baru nilai i akan di iterasi
// jadi niali i = 1, begitu seterusnya hingga nilai i dianggap false