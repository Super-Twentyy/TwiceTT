const videoFiles = [
  "assets/video/V.mp4",
  "assets/video/Going crazy.mp4",
  "assets/video/Like ooh aah.mp4",
  "assets/video/heartshaker.mp4",
  "assets/video/merry&happy.mp4",
  "assets/video/likey.mp4"
];

const videosPerPage = 3;
let currentPage = 1;

const grid = document.getElementById("video-grid");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pageIndicator = document.getElementById("page-indicator");

function renderVideos(page) {
  grid.innerHTML = "";
  const start = (page - 1) * videosPerPage;
  const end = start + videosPerPage;
  const videosToShow = videoFiles.slice(start, end);

  videosToShow.forEach(file => {
    const video = document.createElement("video");
    video.src = file;
    video.controls = true;
    grid.appendChild(video);
  });

  pageIndicator.textContent = `Page ${page}`;
  prevBtn.disabled = page === 1;
  nextBtn.disabled = end >= videoFiles.length;
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderVideos(currentPage);
  }
});

nextBtn.addEventListener("click", () => {
  if ((currentPage * videosPerPage) < videoFiles.length) {
    currentPage++;
    renderVideos(currentPage);
  }
});

renderVideos(currentPage);
