const loader = document.getElementById("pageLoader");
const loaderImage = document.getElementById("loaderImage");

// gambar random loading
const images = [
  "pusing.png",
  "https://static.wikia.nocookie.net/houkai-star-rail/images/3/3e/Sticker_PPG_11_Dr._Ratio_04.png/revision/latest?cb=20231220232523",
  "https://static.wikia.nocookie.net/houkai-star-rail/images/0/0c/Sticker_PPG_11_Screwllum_01.png/revision/latest?cb=20231220232714",
  "https://static.wikia.nocookie.net/houkai-star-rail/images/5/53/Sticker_PPG_20_Chimera_02.png/revision/latest?cb=20250226165702",
  "https://static.wikia.nocookie.net/houkai-star-rail/images/3/35/Sticker_PPG_27_Mortenax_Blade_03.png/revision/latest?cb=20260424203843"
];

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