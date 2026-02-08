const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = menuBtn.querySelector("i"); // Untuk ganti icon

menuBtn.addEventListener("click", () => {
    // Cek apakah menu sedang terbuka
    const isOpen = mobileMenu.classList.contains("translate-y-0");

    if (isOpen) {
        // Tutup Menu
        mobileMenu.classList.remove(
            "translate-y-0",
            "opacity-100",
            "pointer-events-auto"
        );
        mobileMenu.classList.add(
            "-translate-y-full",
            "opacity-0",
            "pointer-events-none"
        );
        // Balikkan icon ke bars
        menuIcon.classList.replace("fa-times", "fa-bars");
    } else {
        // Buka Menu
        mobileMenu.classList.remove(
            "-translate-y-full",
            "opacity-0",
            "pointer-events-none"
        );
        mobileMenu.classList.add(
            "translate-y-0",
            "opacity-100",
            "pointer-events-auto"
        );
        // Ganti icon ke "X" (tanda tutup)
        menuIcon.classList.replace("fa-bars", "fa-times");
    }
});

// Fungsi Pesan WA tetap sama...
function pesanWA(produk) {
    const noWA = "62xxxxxxxxxxx";
    const pesan = encodeURIComponent(
        `Halo kak, saya lihat website banyuwangi-catering.com dan tertarik pesan *${produk}*. Bisa minta daftar harganya?`
    );
    window.location.href = `https://wa.me/${noWA}?text=${pesan}`;
}

function telusuriBanyak() {
    const noWA = "62xxxxxxxxxxx";
    const pesan = encodeURIComponent(
        `Halo, saya sudah lihat menu di website tapi ingin tanya pilihan menu lainnya untuk acara saya. Ada katalog lengkap atau menu paket terbaru?`
    );
    window.location.href = `https://wa.me/${noWA}?text=${pesan}`;
}

function HubungiWa() {
    const noWA = "62xxxxxxxxxxx";
    const pesan = encodeURIComponent(
        `Halo kak, saya mau tanya-tanya soal catering untuk kebutuhan acara saya. Bisa bantu kirimkan daftar menunya?`
    );
    window.location.href = `https://wa.me/${noWA}?text=${pesan}`;
}
