import "./App.css";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import { useEffect, useMemo, useState } from "react";
import BookService from "./services/BookService";

function App() {
  const bookService = useMemo(() => new BookService(), []);
  const [books, setBooks] = useState([]);

  const changeShelf = (bookId, shelfName) => {
    bookService.updateShelf(bookId, shelfName);
    const updatedBooks = books
      .filter((b) => b.id === bookId)
      .map((b) => (b.shelf = shelfName));
    setBooks(updatedBooks);
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
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage books={books} shelfHandler={changeShelf} />}
        />
        <Route
          path="/search"
          element={<SearchPage shelfBooks={books} shelfHandler={changeShelf} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
