// Our dataset: An array of objects representing a digital bookshelf
const library = [
  { title: "A Monster Calls", author: "Patrick Ness", genre: "Fiction", status: "Read", rating: 5 },
  { title: "Blankets", author: "Craig Thompson", genre: "Graphic Novel", status: "Read", rating: 4 },
  { title: "Clean Code", author: "Robert C. Martin", genre: "Technology", status: "Unread", rating: null },
  { title: "Enterprise Cloud Computing Ecosystem", author: "Gautam Shroff", genre: "Technology", status: "Reading", rating: null }
];

console.log("--- My Digital Library ---");

// 1. .filter() - Find all Graphic Novels
const graphicNovels = library.filter(book => book.genre === "Graphic Novel");
console.log("\n1. Graphic Novels:");
console.table(graphicNovels);

// 2. .map() - Create a simple list of just the book titles
const bookTitles = library.map(book => book.title);
console.log("\n2. All Book Titles on my Shelf:");
console.log(bookTitles);

// 3. Chaining methods - Find all "Read" books and sort them by rating (highest to lowest)
const topRatedBooks = library
  .filter(book => book.status === "Read")
  .sort((a, b) => b.rating - a.rating); // b - a sorts in descending order

console.log("\n3. My Top Rated Books:");
console.table(topRatedBooks);
