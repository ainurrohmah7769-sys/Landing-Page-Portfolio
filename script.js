const loader = document.getElementById("pageLoader");
const loaderImage = document.getElementById("loaderImage");

// gambar random loading
const images = [
  "pusing.png",
  "bled.png",
  "syp.png",
  "ratio.png",
  "screw.png",
  "kosong.png"
];

// preload semua gambar
images.forEach(src => {
  const img = new Image();
  img.src = src;
});

// klik antar halaman
document.querySelectorAll('a[href]').forEach(link => {
  link.addEventListener("click", function (e) {

    const href = this.getAttribute("href");

    // skip link yang bukan halaman
    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("http") ||
      href.startsWith("mailto")
    ) return;

    e.preventDefault();

    // pilih gambar random
    const randomIndex = Math.floor(Math.random() * images.length);
    loaderImage.src = images[randomIndex];

    loader.classList.add("active");

    setTimeout(() => {
      window.location.href = href;
    }, 800);
  });
});

// saat halaman selesai load
window.addEventListener("load", () => {
  loader.classList.remove("active");
});

// ini animasi//

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        } else {
  entry.target.classList.remove("show");
      }
    });
  }, {
    threshold: 0.2
  });

  items.forEach(el => observer.observe(el));
});
