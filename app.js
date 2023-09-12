const body = document.getElementById("body");
let guessCount = 1;
let movieName;
let movielist = [];
key = "8c2891d3";

if (localStorage.getItem("streak") == null) {
  localStorage.setItem("streak", 0);
}
if (localStorage.getItem("totalWins") == null) {
  localStorage.setItem("totalWins", 0);
}

StartGame();

async function StartGame() {
  movieName = await GetMovieName();
  movielist = await fetch(
    `https://movieobackendlafinaltest.azurewebsites.net/Movie/AllMovies`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "access-control-allow-origin": "*",
      },
    }
  )
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
}

async function CheckAnswer() {
  const userAnswer = document.getElementById("input-area").value;
  const movieData = await GetMovie(movieName);
  if (userAnswer.toLowerCase() === movieData.Title.toLowerCase()) {
    let currentStreak = parseInt(localStorage.getItem("streak"));
    currentStreak = currentStreak + 1;
    let wins = parseInt(localStorage.getItem("totalWins"));
    wins = wins + 1;
    localStorage.setItem("streak", currentStreak);
    localStorage.setItem("totalWins", wins);
    ShowWinPopUp();
  }
  if (userAnswer.toLowerCase() !== movieData.Title.toLowerCase()) {
    guessCount++;
    GiveHint(guessCount);
  }
  if (guessCount > 6) {
    localStorage.setItem("streak", 0);
    ShowLosePopUp();
  }
}
