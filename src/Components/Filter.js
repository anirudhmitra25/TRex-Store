import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions/productActions";
import { ImCross } from "react-icons/im";

const Filter = ({ setFilter, filtersState }) => {
  const [filters, setFilters] = useState(filtersState.filters);

  useEffect(() => {
    setFilters(filtersState.filters);
  }, [filtersState]);

  const handleFilterChange = (value, property) => {
    setFilters((prev) => {
      let obj = { ...prev };
      obj[property] = value;
      return obj;
    });
  };
  useEffect(() => {
    setFilter(filters);
  }, [filters]);
  return (
    <div
      className="d-flex"
      style={{
        paddingTop: "2rem",
        paddingBottom: "2rem",
        alignItems: "center",
      }}
    >
      <div
        className="d-flex gap-3"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="d-flex w-100 gap-2">
          <select
            className="form-select"
            aria-label="Default select example"
            value={filters.color == null ? "Color" : filters.color}
            onChange={(e) => handleFilterChange(e.target.value, "color")}
          >
            <option disabled>Color</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Black">Black</option>
            <option value="Grey">Grey</option>
            <option value="Pink">Pink</option>
            <option value="Purple">Purple</option>
            <option value="White">White</option>
          </select>
          {filters.color !== null ? (
            <div className="ml-3">
              <ImCross
                onClick={() => {
                  handleFilterChange(null, "color");
                }}
                style={{
                  width: "10px",
                  height: "10px",
                  cursor: "pointer",
                }}
                className="text-danger"
              ></ImCross>
            </div>
          ) : null}
        </div>
        <div className="d-flex w-100 gap-2">
          <select
            className="form-select"
            aria-label="Default select example"
            value={filters.color == null ? "Gender" : filters.gender}
            onChange={(e) => handleFilterChange(e.target.value, "gender")}
          >
            <option disabled>Gender</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
          {filters.gender !== null ? (
            <div className="ml-3">
              <ImCross
                onClick={() => {
                  handleFilterChange(null, "gender");
                }}
                style={{
                  width: "10px",
                  height: "10px",
                  cursor: "pointer",
                }}
                className="text-danger"
              ></ImCross>
            </div>
          ) : null}
        </div>
        <div className="d-flex w-100 gap-2">
          <select
            className="form-select"
            aria-label="Default select example"
            value={filters.color == null ? "Price" : filters.price}
            onChange={(e) => handleFilterChange(e.target.value, "price")}
          >
            <option disabled>Price</option>
            <option value="1">0 - Rs 250</option>
            <option value="2">Rs 251 - Rs 450</option>
            <option value="3">Rs 450</option>
          </select>
          {filters.price !== null ? (
            <div className="ml-3">
              <ImCross
                onClick={() => {
                  handleFilterChange(null, "price");
                }}
                style={{
                  width: "10px",
                  height: "10px",
                  cursor: "pointer",
                }}
                className="text-danger"
              ></ImCross>
            </div>
          ) : null}
        </div>
        <div className="d-flex w-100 gap-2">
          <select
            className="form-select"
            aria-label="Default select example"
            value={filters.type == null ? "Type" : filters.type}
            onChange={(e) => handleFilterChange(e.target.value, "type")}
          >
            <option disabled>Type</option>
            <option value="POLO">Polo</option>
            <option value="HOODIE">Hoodie</option>
            <option value="BASIC">Basic</option>
          </select>
          {filters.type !== null ? (
            <div className="ml-3">
              <ImCross
                onClick={() => {
                  handleFilterChange(null, "type");
                }}
                style={{
                  width: "10px",
                  height: "10px",
                  cursor: "pointer",
                }}
                className="text-danger"
              ></ImCross>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filtersState: state.filters,
});

const mapDispatchToProps = {
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
