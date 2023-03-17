import React from "react";
import { setFilter, setSearchKeyWord } from "../redux/actions/productActions";
import { connect } from "react-redux";
import "./SearchBar.css";

const Search = ({ setSearchKeyWord}) => {
  const handleTextChange = (e) => {
    setSearchKeyWord(e.target.value);
  };
  return (
    <div className="search-wrapper input-group rounded">
      <input
        type="search"
        onChange={handleTextChange}
        className="search"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  productList: state.productList,
});

const mapDispatchToProps = {
  setSearchKeyWord,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
