import React from "react";
import "../styles/SearchCountry.css";

const SearchCountry = ({ handleSubmit }) => {
  return (
    <>
      <div className="form">
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="Ciudad" />
          <button>Buscar</button>
        </form>
      </div>
    </>
  );
};

export default SearchCountry;
