async function addMovie() {
  const movieName = document.getElementById("newMovieName").value;
  fetch(`https://localhost:7263/Movie/AddMovie?movieName=${movieName}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "access-control-allow-origin": "*",
    },
  });
  location.reload();
}
