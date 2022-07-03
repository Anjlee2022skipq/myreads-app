import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import SearchInput from "./SearchInput";
import BookService from "../services/BookService";
import SearchResult from "./SearchResult";

function SearchPage({ shelfBooks, shelfHandler }) {
  const bookService = useMemo(() => new BookService(), []);
  const [searchedBooks, setSearchedbooks] = useState([]);

  const handleSearch = (query) => {
    const searchTerm = query.trim();
    if (searchTerm === "") {
      return setSearchedbooks([]);
    }
    bookService
      .searchBookByInput(searchTerm)
      .then((res) => {
        setSearchedbooks(res.data.books);
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  };

  return (
    <div>
      <SearchInput handleSearch={handleSearch} />

      {searchedBooks.length > 0 && (
        <SearchResult
          books={searchedBooks}
          shelfHandler={shelfHandler}
          shelfBooks={shelfBooks}
        />
      )}
    </div>
  );
}
SearchPage.prototype = {
  shelfBooks: PropTypes.array,
  shelfHandler: PropTypes.func,
};

export default SearchPage;
