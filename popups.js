function ShowWinPopUp() {
  const freezeBox = document.createElement("div");
  freezeBox.className = "freezeBox";
  body.append(freezeBox);
  togglePopupWin();
  document.getElementById("streakWin").textContent =
    localStorage.getItem("streak");
  document.getElementById("totalWinsWin").textContent =
    localStorage.getItem("totalWins");
  ShowPoster();
}

function ShowLosePopUp() {
  const freezeBox = document.createElement("div");
  freezeBox.className = "freezeBox";
  body.append(freezeBox);
  togglePopupLose();
  document.getElementById("streakLose").textContent =
    localStorage.getItem("streak");
  document.getElementById("totalWinsLose").textContent =
    localStorage.getItem("totalWins");
  document.getElementById("movieName").textContent = movieName;
  ShowPoster();
}

function togglePopupPlot() {
  document.getElementById("popup-1").classList.toggle("active");
}

function togglePopupWin() {
  document.getElementById("popup-2").classList.toggle("active");
}
function togglePopupLose() {
  document.getElementById("popup-3").classList.toggle("active");
}

function reload() {
  location.reload();
}

function ShowPoster() {
  const poster = document.getElementsByClassName("movieposter");
  poster[0].style.filter = "none";
}
