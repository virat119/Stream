
   // Function to filter and suggest movies based on the user's input
    function suggestMovies() {
      const searchBar = document.getElementById("search-bar");
      const suggestions = document.getElementById("suggestions");
      const movieCards = document.querySelectorAll(".movie-card");
      const input = searchBar.value.toLowerCase();
      suggestions.innerHTML = ""; // Clear previous suggestions

      // If input is empty, don't display anything
      if (!input) return;

      let matchFound = false;
      
      movieCards.forEach(card => {
        const movieTitle = card.getAttribute("data-title").toLowerCase();

        if (movieTitle.includes(input)) {
          matchFound = true;
          const li = document.createElement("li");
          li.textContent = card.querySelector("h3").textContent;
          li.onclick = function() {
            window.location.href = card.onclick.toString().match(/'(.*?)'/)[1];
          };
          suggestions.appendChild(li);
        }
      });

      // If no matches found, show "No matches found" message
      if (!matchFound) {
        const li = document.createElement("li");
        li.textContent = "No movies found.";
        li.style.color = "red";
        suggestions.appendChild(li);
      }
    }
