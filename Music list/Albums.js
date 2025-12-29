const songs = document.querySelectorAll(".song");
const audio = document.getElementById("audio");

const playerCover = document.getElementById("playerCover");
const nowTitle = document.getElementById("nowTitle");
const nowArtist = document.getElementById("nowArtist");

songs.forEach((song) => {
  song.addEventListener("click", () => {
  
    songs.forEach((s) => s.classList.remove("active"));
    song.classList.add("active");

   
    const img = song.querySelector("img").src;
    const title = song.querySelector("strong").innerText;
    const artist = song.querySelector("small").innerText;
    const src = song.getAttribute("data-src");

   
    playerCover.src = img;
    nowTitle.innerText = title;
    nowArtist.innerText = artist;
    audio.src = src;

    audio.play();
  });
});
