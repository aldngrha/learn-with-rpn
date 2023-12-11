let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input[1] += "Elsharawy" //menambahkan string ke element 1
    input[2] = `Provinsi ${input[2]}` // mereplace value dari index ke 2
    input.splice(4,1,"Pria", "SMA Internasional Metro") //menghapus index ke 4, dan tambahkan element baru
    console.log(input) //tampilkan inputnya
    let tanggalLahir = input[3].split("/") //memisahkan string, berdasarkan / pada index ke 3, dan mengembalikan array baru
    let bulan = ""; // init bulan
    switch (tanggalLahir[1]){ //kondisi jika index ke 1 pada nilai tanggalLahir
        case "01":
            bulan = "Januari"
            break
        case "02":
            bulan = "Februari"
            break
        case "03":
            bulan = "Maret"
            break
        case "04":
            bulan = "April"
            break
        case "05":
            bulan = "Mei"
            break
        case "06":
            bulan = "Juni"
            break
        case "07":
            bulan = "Juli"
            break
        case "08":
            bulan = "Agustus"
            break
        case "09":
            bulan = "September"
            break
        case "10":
            bulan = "Oktober"
            break
        case "11":
            bulan = "November"
            break
        case "12":
            bulan = "Desember"
            break
        default:
            bulan = "Bulan tidak ada di kalender"
    }
    console.log(bulan) //tampilkan bulannya

    let tanggalLahirReverse = [] //init tanggalLahirReverse dalam bentuk array
    for (let i = tanggalLahir.length - 1; i >= 0; i--) {
        tanggalLahirReverse.push(tanggalLahir[i]) //masukkan array yang sudah dibalik ke dalam variable tanggalLahirReverse
    }

    let newElement = tanggalLahirReverse.splice(1, 1)[0] //hapus index ke 1, lalu ambil nilai yang dihapus tadi dan simpan ke dalam variable newElement
    tanggalLahirReverse.splice(2,0, newElement) //mulai dari index ke 2, tambahkan nilai newElement
    console.log(tanggalLahirReverse) //tampilkan hasil akhir dari tanggalLahirReverse

    console.log(tanggalLahir.join("-")) //gabungkan array tanggalLahir dengan tanda - sebagai pemisah antara elementnya
    console.log(input[1].slice(0, 15)) //batasi hanya 15 karakter saja
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */