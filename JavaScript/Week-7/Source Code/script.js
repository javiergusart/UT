const movieList = document.getElementById("movie-list");
const searchInput = document.getElementById("search");
const movieDetailsContainer = document.getElementById("main");

searchInput.addEventListener("input", handleSearchInput);

let movieData = movies;
displayMovies(movieData);

function displayMovies(moviesToDisplay) {
  const movieCardHTML = moviesToDisplay.map(createMovieCardHTML).join("");
  movieList.innerHTML = movieCardHTML;
}

function createMovieCardHTML(movie) {
  return `
  <div class="movie-card" onclick="handleMovieClick(this)">
    <h2>${movie.title}</h2>
    <img src="${movie.image}" alt="${movie.title}" style="width: 100%" />
    <p>Genre: ${movie.genre}</p>
    <p>Director: ${movie.director}</p>
    <p>Release Year: ${movie.releaseYear}</p>
  </div>
  `;
}

function handleSearchInput() {
  const query = searchInput.value.toLowerCase();
  const filteredMovies = movieData.filter((movie) => {
    const movieDataString = `${movie.title} ${movie.genre} ${
      movie.director
    } ${movie.cast.join(" ")}`.toLowerCase();
    return movieDataString.includes(query);
  });
  displayMovies(filteredMovies);
}

function handleMovieClick(element) {
  const clickedMovieCard = element;
  const clickedMovieTitle = clickedMovieCard.querySelector("h2").textContent;
  const selectedMovie = movieData.find(
    (movie) => movie.title === clickedMovieTitle
  );
  displayMovieDetails(selectedMovie);
}

function displayMovieDetails(movie) {
  const movieDetailsHTML = `
  <div>
    <button onclick="window.location.reload()">Back</button>
    <h2>${movie.title}</h2>
    <img src="${movie.image}" alt="${movie.title}" style="width: 100%" />
    <p>Genre: ${movie.genre}</p>
    <p>Director: ${movie.director}</p>
    <p>Release Year: ${movie.releaseYear}</p>
    <p>Plot: ${movie.plot}</p>
    <p>Cast: ${movie.cast.join(", ")}</p>
  </div>
  `;

  movieDetailsContainer.innerHTML = movieDetailsHTML;
}
