const galleryImages = [
"assets/images/1.jpg",
"assets/images/2.jpg","assets/images/3.jpg","assets/images/4.jpg",
"assets/images/5.jpg","assets/images/6.jpg","assets/images/7.jpg",
"assets/images/8.jpg","assets/images/9.jpg","assets/images/10.jpg",
"assets/images/11.jpg","assets/images/12.jpg","assets/images/13.jpg",
"assets/images/14.jpg","assets/images/15.jpg","assets/images/16.jpg",
"assets/images/jihyo (1).jpg","assets/images/mina (1).jpg","assets/images/momo (1).jpg",
"assets/images/nayeon (1).jpg","assets/images/sana (1).jpg","assets/images/tzuyu (1).jpg",
"assets/images/chaeyoung (1).jpg", "assets/images/dahyun (1).jpg","assets/images/jeongyeon (1).jpg", 
"assets/images/jihyo (2).jpg","assets/images/jihyo (3).jpg","assets/images/jihyo (4).jpg",
"assets/images/mina (2).jpg","assets/images/mina (2).jpg","assets/images/mina (3).jpg",
"assets/images/momo (2).jpg","assets/images/momo (3).jpg","assets/images/momo (4).jpg"
];

const imagesPerPage = 8;
let currentPage = 1;

const galleryGrid = document.getElementById("gallery-grid");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pageIndicator = document.getElementById("page-indicator");

function renderGalleryPage(page) {
  galleryGrid.innerHTML = "";
  const start = (page - 1) * imagesPerPage;
  const end = start + imagesPerPage;
  const pageImages = galleryImages.slice(start, end);

  pageImages.forEach(imgSrc => {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = "TWICE Gallery";
    galleryGrid.appendChild(img);
  });

  // Update pagination
  pageIndicator.textContent = `Page ${currentPage} of ${Math.ceil(galleryImages.length / imagesPerPage)}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === Math.ceil(galleryImages.length / imagesPerPage);
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderGalleryPage(currentPage);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < Math.ceil(galleryImages.length / imagesPerPage)) {
    currentPage++;
    renderGalleryPage(currentPage);
  }
});

renderGalleryPage(currentPage);
