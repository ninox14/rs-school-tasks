import playlist from "./playList.js";


const audio = document.querySelector("audio");
const playBtn = document.querySelector('.play');
const playNextBtn = document.querySelector(".play-next");
const playPrevBtn = document.querySelector(".play-prev");
const playListContainer = document.querySelector(".play-list");
let playIndex = 0;


const playlistNode = (index) => {
  return playListContainer.children[index];
}

playlist.forEach((el) => {
  const li = document.createElement("li");
  li.classList.add("play-item");
  li.textContent = el.title;
  playListContainer.append(li);
});


function toggleAudio () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
function playNext() {
  playlistNode(playIndex).classList.remove("item-active");
  playIndex++;
  if (playIndex > playlist.length - 1) {
    playIndex = 0;
  }
  playlistNode(playIndex).classList.add("item-active");
  audio.src = playlist[playIndex].src;
}

function playPrev() {
  playlistNode(playIndex).classList.remove("item-active");
  playIndex--;
  if (playIndex < 0) {
    playIndex = playlist.length - 1;
  }
  playlistNode(playIndex).classList.add("item-active");
  audio.src = playlist[playIndex].src;
}

playNextBtn.onclick = () => {
  playNext();
  playBtn.classList.remove("active");
}


playPrevBtn.onclick = () => {
  playPrev();
  playBtn.classList.remove('active');
};

playBtn.onclick = () => {
  toggleAudio();
  playBtn.classList.toggle("active");
  playlistNode(playIndex).classList.add("item-active");
}
