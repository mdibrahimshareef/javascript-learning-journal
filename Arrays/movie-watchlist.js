/**
 * JavaScript Learning Journal - Arrays Exercise
 * Topic: Array Methods (push, map, filter, forEach)
 */

// 1. Setup our initial array of objects
const myWatchlist = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8, watched: true },
  { title: "The Matrix", genre: "Sci-Fi", rating: 8.7, watched: true },
  { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, watched: false },
  { title: "The Dark Knight", genre: "Action", rating: 9.0, watched: true },
  { title: "Avengers: Endgame", genre: "Action", rating: 8.4, watched: false }
];

console.log("--- Initial Watchlist ---");
console.log(myWatchlist);

// 2. Add a new movie using push()
function addMovie(title, genre, rating, watched) {
  myWatchlist.push({ title, genre, rating, watched });
}

addMovie("Dune", "Sci-Fi", 8.0, false);
console.log("\n--- After adding 'Dune' ---");
console.log(myWatchlist[myWatchlist.length - 1]); // Checks the last item added

// 3. Filter for unwatched movies using filter()
const unwatchedMovies = myWatchlist.filter(movie => movie.watched === false);

console.log("\n--- Unwatched Movies ---");
console.log(unwatchedMovies);

// 4. Create an array of just the movie titles using map()
const justTitles = myWatchlist.map(movie => movie.title);

console.log("\n--- Movie Titles Only ---");
console.log(justTitles);

// 5. Print a summary using forEach()
console.log("\n--- Watchlist Summary ---");
myWatchlist.forEach(movie => {
  const status = movie.watched ? "Seen it" : "Need to watch";
  console.log(`${movie.title} (${movie.genre}) - ${status}`);
});
