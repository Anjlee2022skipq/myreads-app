import React, { useState, useEffect, useMemo } from "react";
import BookService from "../services/BookService";
import BookShelf from "./BookShelf";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const bookService = useMemo(() => new BookService(), []);
  const [books, setBooks] = useState([]);

  const changeShelf = (bookId, shelfName) => {
    bookService.updateShelf(bookId, shelfName);
    const updatedBooks = books
      .filter((b) => b.id == bookId)
      .map((b) => (b.shelf = shelfName));
    setBooks(updatedBooks);
  };

  const searchHandler = () => {
    navigate("/search");
  };

  useEffect(() => {
    bookService
      .getAllBooks()
      .then((res) => {
        setBooks(res.data.books);
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }, [books]);

  return (
    <>
      <div>
        <h3
          className="top-header"
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "5px",
          }}
        >
          My Reads
        </h3>
      </div>

      <BookShelf
        shelfName="Currently Reading"
        books={books.filter((b) => b.shelf == "currentlyReading")}
        shelfHandler={changeShelf}
      />
      <BookShelf
        shelfName="Read"
        books={books.filter((b) => b.shelf == "read")}
        shelfHandler={changeShelf}
      />
      <BookShelf
        shelfName="Want to Read"
        books={books.filter((b) => b.shelf == "wantToRead")}
        shelfHandler={changeShelf}
      />
      <div className=" rounded-btn " onClick={searchHandler}></div>
    </>
  );
}

export default HomePage;
