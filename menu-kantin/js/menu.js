// Menu Kantin SMK Mitra - P1-W07

const menu = [
  { nama: "Nasi goreng", harga: 12000, kategori: "Makanan" },
  { nama: "Mie goreng", harga: 12000, kategori: "Makanan" },
  { nama: "Ayam geprek", harga: 15000, kategori: "Makanan" },
  { nama: "Es teh", harga: 5000, kategori: "Minuman" },
  { nama: "Es jeruk", harga: 7000, kategori: "Minuman" },
  { nama: "Kopi hitam", harga: 8000, kategori: "Minuman" }
];

const daftarMenu = document.querySelector("#daftar-menu");
const jumlahMenu = document.querySelector("#jumlah-menu");

// Mode gelap - sesuai modul
const tombolTema = document.querySelector("#tombol-tema");
tombolTema.addEventListener("click", () => {
  document.body.classList.toggle("gelap");
  if (document.body.classList.contains("gelap")) {
    tombolTema.textContent = "Mode Terang";
  } else {
    tombolTema.textContent = "Mode Gelap";
  }
});

function tampilkanMenu(daftar) {
  daftarMenu.innerHTML = "";
  daftar.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.nama} - Rp${item.harga}`;
    daftarMenu.appendChild(li);
  });
  jumlahMenu.textContent = `${daftar.length} menu tersedia`;
}

function pasangFilter(idTombol, kategori) {
  const tombol = document.querySelector(idTombol);
  tombol.addEventListener("click", () => {
    document.querySelector(".tombol-filter.aktif").classList.remove("aktif");
    tombol.classList.add("aktif");
    if (kategori === "Semua") {
      tampilkanMenu(menu);
    } else {
      tampilkanMenu(menu.filter((item) => item.kategori === kategori));
    }
  });
}

tampilkanMenu(menu);
pasangFilter("#filter-semua", "Semua");
pasangFilter("#filter-makanan", "Makanan");
pasangFilter("#filter-minuman", "Minuman");