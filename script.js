const video = document.querySelector("video");
const play = document.getElementById("play");

const timeBar = document.getElementById("timeBar").firstChild.nextSibling;
const timerShow = document.getElementById("timer");

function play_pause() {
  video.style.opacity = 1;
  if (video.paused) {
    play.className = "fa-solid fa-pause play";
    video.play();
  } else {
    play.className = "fa-solid fa-play play";
    video.pause();
  }
}

function stop() {
  video.style.opacity = 0.2;

  video.pause();
  play.className = "fa-solid fa-play play";
  video.currentTime = 0;
}
video.addEventListener("timeupdate", timer);

function timer() {
  const timeBarLength = document.getElementById("timeBar").clientWidth;
  const currentTime = video.currentTime;
  const totalTime = video.duration;

  const minutes = Math.floor(currentTime / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(currentTime % 60)
    .toString()
    .padStart(2, "0");

  const currentTimeBarLength = timeBarLength * (currentTime / totalTime);
  console.log(currentTimeBarLength);

  timerShow.innerText = minutes + " : " + seconds;
  timeBar.style.width = `${currentTimeBarLength}px`;
}
