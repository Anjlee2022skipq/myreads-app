import React from "react";
import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

function SearchResult({ books, shelfHandler, shelfBooks }) {
  const updatedBooks = books.map((book) => {
    shelfBooks.map((b) => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
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
SearchResult.prototype = {
  books: PropTypes.array,
  shelfHandler: PropTypes.func,
  shelfBooks: PropTypes.array,
};
export default SearchResult;
