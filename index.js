// fetchBooks() deliverables:
// - renders book titles into the DOM by passing a JSON object to renderBooks()

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
   const fetching = fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => renderBooks(data));
    return fetching;
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
