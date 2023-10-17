const content = document.getElementById("maincontent");

async function GiveHint(guessCount) {
    const movieData = await GetMovie(movieName);
    const tvcontent = document.getElementById("tvcontent");
    switch (guessCount) {
      case 2:
        const tvbackground = document.getElementById("tv");
        tvbackground.style.backgroundColor = "black";
  
        const actorstext = document.createElement("div");
        actorstext.classList.add("hint-text");
        actorstext.innerHTML = `Actors: <br> ${movieData.Actors}`;
        tvcontent.appendChild(actorstext);
        break;
      case 3:
        const directortext = document.createElement("div");
        directortext.classList.add("hint-text");
        directortext.innerHTML = `Director: &nbsp; ${movieData.Director}`;
        tvcontent.appendChild(directortext);
        
        const runtime = document.createElement("div");
        runtime.classList.add("time-text");
        runtime.innerHTML = movieData.Runtime;
        tvcontent.appendChild(runtime);
        break;
      case 4:
        const releasedtext = document.createElement("div");
        releasedtext.classList.add("hint-text");
        releasedtext.innerHTML = `Release: &nbsp; ${movieData.Released}`;
        tvcontent.appendChild(releasedtext);
        break;
      case 5:
        const plottext = document.createElement("div");
        plottext.classList.add("hint-text");
        plottext.innerHTML = `Plot: &nbsp; <i class="fa-solid fa-circle-info" id="plotButton" style="color: #ff0000;"></i>`;
        tvcontent.appendChild(plottext);
        document.getElementById("plotButton").addEventListener("click", togglePopupPlot);
        document.getElementById("plot").textContent = movieData.Plot;
        break;
  
      case 6:
        const movieposter = document.createElement("img");
        movieposter.classList.add("movieposter");
        movieposter.src = movieData.Poster;
        content.appendChild(movieposter);
        break;
    }
  }