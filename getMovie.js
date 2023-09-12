async function GetMovieName() {
    let random = CreateRandomNumber();
    let movie = await fetch(
      `https://movieobackendlafinaltest.azurewebsites.net/Movie/GetMovie/` +
        random,
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
        console.log(json.movieTitle);
        return json.movieTitle;
      });
    return movie;
  }

  async function GetMovie(movieName) {
    const data = await fetch(
      `https://www.omdbapi.com/?t=${movieName}&apikey=${key}`
    )
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
    return data;
  }

  function CreateRandomNumber() {
    let random = Math.floor(Math.random() * 250 + 1);
    return random;
  }
