import axios from "axios";

const baseURL = "https://reactnd-books-api.udacity.com";

const authAxios = axios.create({
  baseURL: baseURL,
  headers: {
    authorization: "whatever-you-want",
  },
});

export default class BookService {
  getAllBooks = () => {
    return authAxios.get(`${baseURL}/books`);
  };

  updateShelf = (bookId, shelfName) => {
    const data = { shelf: shelfName };

    authAxios.put(`${baseURL}/books/${bookId}`, data);
  };

  searchBookByInput = (query) => {
    const data = {
      query: query,
      maxResults: 10,
    };
    return authAxios.post(`${baseURL}/search`, data);
  };
}
