// Menu Kantin SMKN 1 Pasuruan
let menu = [];

const daftarMenu = document.querySelector("#daftar-menu");
const jumlahMenu = document.querySelector("#jumlah-menu");

// Mode gelap
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

async function muatMenu() {
  jumlahMenu.textContent = "Memuat menu...";
  try {
    const response = await fetch("data/menu.json");
    if (!response.ok) {
      throw new Error(`Status ${response.status}`);
    }
    menu = await response.json();
    tampilkanMenu(menu);
  } catch (error) {
    jumlahMenu.textContent = "Maaf, daftar menu gagal dimuat. Periksa file menu.json.";
    console.error(error);
  }
}

muatMenu();
pasangFilter("#filter-semua", "Semua");
pasangFilter("#filter-makanan", "Makanan");
pasangFilter("#filter-minuman", "Minuman");