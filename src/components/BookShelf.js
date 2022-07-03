import React from "react";
import BookItem from "./BookItem";
import PropTypes from "prop-types";
function BookShelf({ shelfName, books, shelfHandler }) {
  return (
    <div className="p-2">
      <h4>{shelfName}</h4>
      <hr />
      <div className="d-flex row ">
        {books.map((book) => (
          <BookItem key={book.id} book={book} shelfHandler={shelfHandler} />
        ))}
      </div>
    </div>
  );
}
BookShelf.prototype = {
  shelfName: PropTypes.string,
  books: PropTypes.array,
  shelfHandler: PropTypes.func,
};
export default BookShelf;
