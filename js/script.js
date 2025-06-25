document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("bg-video");
  const toggleBtn = document.getElementById("toggle-video");

  toggleBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      toggleBtn.textContent = "Pause Video";
    } else {
      video.pause();
      toggleBtn.textContent = "Play Video";
    }
  });
});
