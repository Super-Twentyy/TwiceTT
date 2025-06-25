const albums = [
  {
    id: "thestorybegin",
    title: "The Story Begin",
    releaseDate: "October 2015",
    cover: "assets/images/albums/The Story Begin.jpg",
    description: "Debut album with hit songs including 'Like Ooh-Ahh'."
  },
  {
    id: "marryhappy",
    title: "Marry & Happy",
    releaseDate: "December 2017",
    cover: "assets/images/albums/marry happy.jpg",
    description: "Includes the popular track 'TT'."
  },
  {
    id: "yesoryes",
    title: "Yes Or Yes",
    releaseDate: "November2018",
    cover: "assets/images/albums/yesoryes.jpg",
    description: "First full-length album with title track 'Likey'."
  },
  {
    id: "feel-special",
    title: "Feel Special",
    releaseDate: "September 2019",
    cover: "assets/images/albums/feelspecial.jpg",
    description: "Hit single 'Feel Special' with a fresh concept."
  },
];

const albumsGrid = document.getElementById("albums-grid");

function createAlbumCard(album) {
  const card = document.createElement("div");
  card.className = "album-card";
  card.innerHTML = `
    <img src="${album.cover}" alt="${album.title}" />
    <div class="album-info">
      <h3>${album.title}</h3>
      <p>Released: ${album.releaseDate}</p>
      <p>${album.description}</p>
    </div>
  `;

  card.addEventListener("click", () => {
    window.location.href = `album-detail.html?id=${album.id}`;
  });
  return card;
}

albums.forEach(album => {
  albumsGrid.appendChild(createAlbumCard(album));
});
