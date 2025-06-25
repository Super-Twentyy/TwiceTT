const albums = {
  "thestorybegin": {
    title: "The Story Begin",
    releaseDate: "October 2015",
    cover: "assets/images/albums/The Story Begin.jpg",
    description: "Debut album with hit songs including 'Like Ooh-Ahh'.",
    tracks: [
      { title: "Like Ooh-Ahh", video: "assets/video/Like ooh aah.mp4" },
      { title: "Do It Again", video: "assets/video/Do it again.mp4" },
      { title: "Going Crazy", video: "assets/video/Going crazy.mp4" }
    ]
  },
  "marryhappy": {
    title: "Marry & Happy",
    releaseDate: "December 2017",
    cover: "assets/images/albums/marry happy.jpg",
    description: "Celebrate the season with TWICE — where every moment is Merry & Happy!.",
    tracks: [
      { title: "Heart Sheaker", video: "assets/video/" },
      { title: "Marry & Happy", video: "assets/video/" },
      { title: "Likey", video: "assets/video/" }
    ]
  },
  "yesoryes": {
    title: "Yes Or Yes",
    releaseDate: "November 2018",
    cover: "assets/images/albums/yesoryes.jpg",
    description: "When TWICE gives you a choice, there's only one answer: YES or YES!.",
    tracks: [
      { title: "Say You Love Me", video: "assets/video/" },
      { title: "Yes Or Yes", video: "assets/video/" },
      { title: "Lalala", video: "assets/video/" }
    ]
  },
    "feel-special": {
    title: "Feel Special",
    releaseDate: "September 2019",
    cover: "assets/images/albums/feelspecial.jpg",
    description: "In a world that tries to bring you down, TWICE makes you Feel Special.",
    tracks: [
      { title: "Feel Special", video: "assets/video/" },
      { title: "Rainbow", video: "assets/video/" },
      { title: "Love Foolish", video: "assets/video/" }
    ]
  }
};

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function getVideoEmbed(videoUrl) {
  if (!videoUrl) return "<p>No video available.</p>";
  if (videoUrl.includes("youtube.com")) {
    return `<iframe id="music-video" width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
  } else {
    return `<video id="music-video" width="560" height="315" controls>
              <source src="${videoUrl}" type="video/mp4">
              Your browser does not support the video tag.
            </video>`;
  }
}

function loadAlbumDetail(albumId) {
  const album = albums[albumId];
  if (!album) {
    document.getElementById("album-detail-section").innerHTML = "<p>Album not found.</p>";
    return;
  }

  const section = document.getElementById("album-detail-section");
  section.innerHTML = `
    <img class="album-cover" src="${album.cover}" alt="${album.title}" />
    <h2 class="album-title">${album.title}</h2>
    <p class="album-release">Released: ${album.releaseDate}</p>
    <p class="album-description">${album.description}</p>
    <ul class="tracklist">
      ${album.tracks.map((track, i) => `<li data-video="${track.video}">${i + 1}. ${track.title}</li>`).join("")}
    </ul>
    <div class="video-container" style="text-align:center;" id="video-container">
      ${getVideoEmbed(album.tracks[0].video)}
    </div>
  `;

  const trackElements = section.querySelectorAll(".tracklist li");

  trackElements.forEach(trackEl => {
    trackEl.addEventListener("click", () => {
      const videoUrl = trackEl.dataset.video;
      const videoContainer = document.getElementById("video-container");
      if (videoUrl) {
        videoContainer.innerHTML = getVideoEmbed(videoUrl);
        trackElements.forEach(t => t.style.color = "#ddd");
        trackEl.style.color = "#f0c";
      }
    });
  });

  trackElements[0].style.color = "#f0c";
}

document.addEventListener("DOMContentLoaded", () => {
  const albumId = getQueryParam("id");
  loadAlbumDetail(albumId);
});