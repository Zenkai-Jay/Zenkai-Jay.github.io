

class Song {
  constructor(title, artist, album, year, genre, coverArt, youtubeCode) {
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.year = year;
    this.genre = genre;
    this.coverArt = coverArt;
    this.youtubeCode = youtubeCode;
  }


  getCard(index) {
    return `
      <div class="song-card" data-index="${index}">
        <div class="song-head">
          <h3>${this.title}</h3>
          <p>By ${this.artist}</p>
        </div>
        <img class="song-cover" src="${this.coverArt}" alt="${this.title}">
      </div>
    `;
  }
}


const songs = [
  new Song(
    "Love Blur",
    "Slayr",
    "Half-Blood",
    2025,
    "Hip Hop",
    "images/Half-blood.jpg",
    "eHKoKmM-IgQ"
  ),
  new Song(
    "popstar Nervous",
    "DC The Don",
    "the rumors are true",
    2026,
    "Hip Hop",
    "images/trat.jpeg",
    "3e_7Eaz8dlY"
  ),
  new Song(
    "That Way",
    "Lil Uzi Vert",
    "Eternal Atake",
    2021,
    "Hip Hop",
    "images/EA.jpeg",
    "PR-duMh19FY"
  ),
  new Song(
    "START A RUMOR",
    "Sam Gellitary",
    "ANYWHERE IS FINE",
    2025,
    "House",
    "images/Awhsp.jpg",
    "5dJGfDYz3pg"
  )
];



const gallery = document.getElementById("gallery");

for (let i = 0; i < songs.length; i++) {
  gallery.innerHTML += songs[i].getCard(i);
}



const modal = document.getElementById("modal");
const iframe = document.getElementById("modalIframe");
const modalTitle = document.getElementById("modalTitle");
const modalArtist = document.getElementById("modalArtist");
const modalAlbum = document.getElementById("modalAlbum");
const modalYear = document.getElementById("modalYear");
const modalGenre = document.getElementById("modalGenre");
const closeBtn = document.getElementById("closeBtn");




const cards = document.querySelectorAll(".song-card");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {

    const index = this.getAttribute("data-index");
    const selectedSong = songs[index];

    // Fill modal with song data
    modalTitle.textContent = selectedSong.title;
    modalArtist.textContent = selectedSong.artist;
    modalAlbum.textContent = selectedSong.album;
    modalYear.textContent = selectedSong.year;
    modalGenre.textContent = selectedSong.genre;

    // Load YouTube video
    iframe.src = "https://www.youtube.com/embed/" + selectedSong.youtubeCode;

    // Show modal
    modal.style.display = "block";
  });
}



// Close button
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
  iframe.src = ""; // stop video
});

// Close if clicking outside modal content
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    iframe.src = "";
  }
});