import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function SearchInput({ handleSearch }) {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/");
  };
  return (
    <div className="m-3 d-flex row">
      <div
        onClick={backHandler}
        style={{
          cursor: "pointer",
          width: "130px",
          padding: "5px",
          backgroundColor: "green",
          color: "white",
          marginBottom: "3px",
          borderRadius: "30px",
          textAlign: "center",
        }}
      >
        back to home{" "}
      </div>
      <input
        placeholder="search book.. "
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
SearchInput.prototype = {
  handleSearch: PropTypes.func,
};
export default SearchInput;
