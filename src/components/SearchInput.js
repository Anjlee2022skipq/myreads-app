import React from "react";

function SearchInput({ handleSearch }) {
  return (
    <div className="m-3 d-flex row">
      <input
        placeholder="search book.. "
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
