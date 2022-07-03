import axios from "axios";

const baseURL = "https://reactnd-books-api.udacity.com";

const authAxios = axios.create({
  baseURL: baseURL,
  headers: {
    authorization: "whatever-you-want",
  },
});

// class containing methods for accessing the the endpoints given by udacity

export default class BookService {
  //get the books
  getAllBooks = () => {
    return authAxios.get(`${baseURL}/books`);
  };

  //update the shelf of book
  updateShelf = (bookId, shelfName) => {
    const data = { shelf: shelfName };
    authAxios.put(`${baseURL}/books/${bookId}`, data);
  };

  //search book by name or author
  searchBookByInput = (query) => {
    const data = {
      query: query,
      maxResults: 10,
    };
    return authAxios.post(`${baseURL}/search`, data);
  };
}
