import React from "react";

function BookItem({ book, shelfHandler }) {
  return (
    <div className="col-md-3 px-4 py-3 m-3 d-flex">
      <div className=" flex-grow-1 px-5 mt-1 ">
        <div className="d-flex justify-content-center">
          <div className="d-flex align-items-end">
            <img src={book.imageLinks.thumbnail} width={100} height={150} />
            <div className="dropdown-btn">
              {console.log(book.shelf)}
              <select
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: "0",
                  cursor: "pointer",
                }}
                value={book.shelf}
                onChange={(e) => shelfHandler(book.id, e.target.value)}
              >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
        </div>
        {book.title}
      </div>
    </div>
  );
}

export default BookItem;
