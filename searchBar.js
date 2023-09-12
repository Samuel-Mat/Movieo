function SearchBar() {
    DeleteSuggestions();
    const value = document.getElementById("input-area").value;
    let suggestionCounter = 0;
    if (value !== "") {
      movielist.forEach((movie) => {
        if (
          movie.movieTitle.toLowerCase().includes(value.toLowerCase()) &&
          suggestionCounter != 3
        ) {
          CreateSuggestion(movie.movieTitle);
          suggestionCounter++;
        }
      });
    }
  }
  
  function CreateSuggestion(value) {
    const suggestionBox = document.createElement("li");
    const suggestionList = document.getElementById("suggestion-list");
  
    suggestionBox.textContent = value;
    suggestionBox.className = "suggestion-box";
    suggestionBox.addEventListener("click", function () {
      const textBox = document.getElementById("input-area");
      textBox.value = this.textContent;
      DeleteSuggestions();
    });
  
    suggestionList.append(suggestionBox);
  }
  
  function DeleteSuggestions() {
    const suggestionList = document.getElementById("suggestion-list");
    suggestionList.innerHTML = "";
  }