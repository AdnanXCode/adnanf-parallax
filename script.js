window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar"); // Mengakses elemen navbar

    var lastScrollTop = 0; // Inisialisasi variabel untuk menyimpan posisi scroll sebelumnya

    window.addEventListener("scroll", function () {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Mendapatkan posisi scroll saat ini

        if (currentScroll > lastScrollTop && currentScroll > 50) {
            // Jika scroll ke bawah dan sudah melebihi 50px dari atas
            navbar.classList.add("navbar-hidden"); // Menambahkan kelas untuk menyembunyikan navbar
        } else {
            // Jika scroll ke atas atau belum melebihi 50px dari atas
            navbar.classList.remove("navbar-hidden"); // Menghapus kelas untuk menampilkan navbar kembali
        }

        lastScrollTop = currentScroll; // Menyimpan posisi scroll saat ini untuk perbandingan di scroll selanjutnya
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar"); // Mengakses elemen navbar
    var homeButton = document.querySelector(".homeButton"); // Mengakses tombol Home

    var lastScrollTop = 0; // Inisialisasi variabel untuk menyimpan posisi scroll sebelumnya

    window.addEventListener("scroll", function () {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Mendapatkan posisi scroll saat ini

        if (currentScroll > lastScrollTop && currentScroll > 50) {
            // Jika scroll ke bawah dan sudah melebihi 50px dari atas
            navbar.classList.add("navbar-hidden"); // Menambahkan kelas untuk menyembunyikan navbar
            navbar.classList.add("navbar-scroll-down"); // Menambahkan kelas untuk memberi tahu scroll ke bawah
            navbar.classList.remove("navbar-scroll-up"); // Menghapus kelas untuk memberi tahu scroll ke atas
        } else {
            // Jika scroll ke atas atau belum melebihi 50px dari atas
            navbar.classList.remove("navbar-hidden"); // Menghapus kelas untuk menampilkan navbar kembali
            navbar.classList.add("navbar-scroll-up"); // Menambahkan kelas untuk memberi tahu scroll ke atas
            navbar.classList.remove("navbar-scroll-down"); // Menghapus kelas untuk memberi tahu scroll ke bawah
        }

        lastScrollTop = currentScroll; // Menyimpan posisi scroll saat ini untuk perbandingan di scroll selanjutnya
    });
});
