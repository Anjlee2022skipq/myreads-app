import React, { useEffect } from "react";
import BookItem from "./BookItem";

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

export default BookShelf;
