const konten = document.getElementById("konten")
const judul_konten = document.getElementById("judul-konten");
const deskripsi_teks = document.getElementById("deskripsi-teks");
const box = document.getElementById("box")
const deskripsi_gambar = document.getElementById("deskripsi-gambar");
const button_grup = document.getElementById("button-grup");
const button_iya = document.getElementById("button-iya");
const button_tidak = document.getElementById("button-tidak");

button_iya.addEventListener('click', ()=> {
  judul_konten.innerHTML = "Anda Berbohong!";
  deskripsi_teks.innerHTML = "Anda adalah seorang Teknisi";
  box.style.backgroundColor = "#E12E2E";
  deskripsi_gambar.src = "Assets/Teknisi.png";
  button_grup.style.display = 'none';
  konten.classList.add("animation-wobble");
});

button_tidak.addEventListener('click', ()=> {
  judul_konten.innerHTML = "Anda Benar!";
  deskripsi_teks.innerHTML = "Anda adalah seorang Mahasiswa";
  box.style.backgroundColor = "#6FD240"
  deskripsi_gambar.src = "Assets/Mahasiswa.png";
  button_grup.style.display = 'none';
  konten.classList.add("animation-wobble");
});