//  Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
//  Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
//  yaitu nama dan peran. Variabel peran harus memiliki isi data,
//  bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
//  bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
//  Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
//  Tugas Anda adalah untuk membuat program yang mengecek isi variabel
//  peran serta mengeluarkan respon sesuai isi variabel tersebut.
//  ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//  halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//  halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//  halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//  tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//  tips belajar penggunaan `` (backtick) pada javascript agar
//  mudah dalam memasukan variabel ke dalam string
//  tapi tanpa backtick juga ga masalah sih yg penting output sesuai

//  isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
//  input nama dan peran.
//  cek apakah nama kosong.
//  Jika iya, maka print pesan "Nama wajib diisi."
//  cek apakah peran kosong.
//  Jika iya, maka print pesan "Pilih Peranmu untuk memulai game."
//  Jika peran tidak kosong:
//  Jika peran adalah "Ksatria",
//  maka print pesan "Halo Ksatria [nama], kamu dapat menyerang dengan senjatamu!"
//  Jika peran adalah "Tabib",
//  maka print pesan "Halo Tabib [nama], kamu akan membantu temanmu yang terluka."
//  Jika peran adalah "Penyihir",
//  maka print pesan "Halo Penyihir [nama], ciptakan keajaiban yang membantu kemenanganmu!"
//  Jika peran tidak sesuai,
//  maka print pesan "Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada."

// CODE
let nama = "Aldi";
let peran = "Tabib";

if (nama === "") {
    console.log("Nama wajib diisi.");
} else if (peran === "") {
    console.log("Pilih Peranmu untuk memulai game.");
} else {
    if (peran === "Ksatria") {
        console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
    } else if (peran === "Tabib") {
        console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
    } else if (peran === "Penyihir") {
        console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    } else {
        console.log("Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada.");
    }
}