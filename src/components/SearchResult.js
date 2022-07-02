import React from "react";
import BookShelf from "./BookShelf";

function SearchResult({ books, shelfHandler, shelfBooks }) {
  const updatedBooks = books.map((book) => {
    shelfBooks.map((b) => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      } else {
        book.shelf = "none";
      }
      return b;
    });
    return book;
  });
  return (
    <div className="m-2">
      <BookShelf
        shelfName="search results"
        books={updatedBooks}
        shelfHandler={shelfHandler}
      />
    </div>
  );
}

export default SearchResult;
