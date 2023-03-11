const video = document.querySelector("video");
const myVideo = document.querySelector("#myVideo");
const play = document.getElementById("play");
const timeBar = document.querySelector('input[type="range"]');
const timerShow = document.getElementById("timer");
const totalTime = Number(video.duration);
const root = document.documentElement;

timeBar.max = totalTime;

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
window.addEventListener("resize", fontSize);
window.addEventListener("load", fontSize);

function fontSize() {
  let fontSize = video.clientHeight + "px";
  root.style.setProperty("--fontSize", fontSize);
}

function timer() {
  const currentTime = Number(video.currentTime);
  timeBar.value = currentTime;
  const minutes = Math.floor(currentTime / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(currentTime % 60)
    .toString()
    .padStart(2, "0");

  timerShow.innerText = minutes + " : " + seconds;
}

timeBar.addEventListener("input", function () {
  video.currentTime = timeBar.value;
  if (timeBar.value !== timeBar.min) {
    video.style.opacity = 1;
  } else {
    video.style.opacity = 0.2;
  }
});
