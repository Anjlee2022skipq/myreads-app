import React from "react";
import BookShelf from "./BookShelf";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
function HomePage({ books, shelfHandler }) {
  const navigate = useNavigate();

  const searchHandler = () => {
    navigate("/search");
  };

  return (
    <>
      <div>
        <h3
          className="top-header"
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "5px",
            textAlign: "center",
          }}
        >
          My Reads
        </h3>
      </div>

      <BookShelf
        shelfName="Currently Reading"
        books={books.filter((b) => b.shelf === "currentlyReading")}
        shelfHandler={shelfHandler}
      />
      <BookShelf
        shelfName="Read"
        books={books.filter((b) => b.shelf === "read")}
        shelfHandler={shelfHandler}
      />
      <BookShelf
        shelfName="Want to Read"
        books={books.filter((b) => b.shelf === "wantToRead")}
        shelfHandler={shelfHandler}
      />
      <div className=" rounded-btn " onClick={searchHandler}></div>
    </>
  );
}
HomePage.prototype = {
  books: PropTypes.array,
  shelfHandler: PropTypes.func,
};

export default HomePage;
