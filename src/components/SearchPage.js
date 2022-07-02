import React, { useEffect, useMemo, useState } from "react";
import SearchInput from "./SearchInput";
import BookService from "../services/BookService";
import SearchResult from "./SearchResult";
function SearchPage() {
  const bookService = useMemo(() => new BookService(), []);

  const [shelfBooks, setShelfbooks] = useState([]);
  const [books, setBooks] = useState([]);

  const changeShelf = (bookId, shelfName) => {
    console.log("iam called");
    bookService.updateShelf(bookId, shelfName);
  };

  const handleSearch = (query) => {
    bookService
      .searchBookByInput(query)
      .then((res) => {
        setBooks(res.data.books);
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  };
  useEffect(() => {
    bookService.getAllBooks().then((res) => {
      setShelfbooks(res.data.books);
    });
  }, []);

  return (
    <div style={{ width: "100%", border: "1px solid black" }}>
      <SearchInput handleSearch={handleSearch} />

      <SearchResult
        books={books}
        shelfHandler={changeShelf}
        shelfBooks={shelfBooks}
      />
    </div>
  );
}

export default SearchPage;
