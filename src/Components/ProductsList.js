import React, { useEffect, useState } from "react";
import {
  getProductsList,
  updateProducts,
} from "../redux/actions/productActions";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductListPage = ({ productList, searchKeyword, filters }) => {
  const [productsArray, setProductsArray] = useState(productList.products);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (productList.loading === false) {
      setLoading(true);
      setProductsArray(productList.products);
      setLoading(false);
    }
  }, [productList]);

  useEffect(() => {
    if (
      productList.loading === false &&
      productList.products.length > 0 &&
      searchKeyword?.searchKeyword !== null
    ) {
      setLoading(true);
      const newProductsList = productList?.products.filter((product) => {
        return (
          product?.name
            .toLowerCase()
            .includes(searchKeyword.searchKeyword.toLowerCase()) ||
          product?.type
            .toLowerCase()
            .includes(searchKeyword.searchKeyword.toLowerCase()) ||
          product?.color
            .toLowerCase()
            .includes(searchKeyword.searchKeyword.toLowerCase())
        );
      });

      setProductsArray(newProductsList);
      setLoading(false);
    }
  }, [searchKeyword]);

  useEffect(() => {
    let filter = filters.filters;

    if (
      productList.loading === false &&
      productList.products &&
      !Object.values(filter).every((val) => val === null)
    ) {
      let finalProductsArray = productList.products;
      if (filter.color !== null) {
        let filteredList = productList.products.filter((product) => {
          return product.color.toLowerCase() === filter.color.toLowerCase();
        });

        let tempArray = finalProductsArray.filter((ele) => {
          return filteredList.includes(ele);
        });
        finalProductsArray = tempArray;
      }
      if (filter.type !== null) {
        let filteredList = productList.products.filter((product) => {
          return product.type.toLowerCase() === filter.type.toLowerCase();
        });
        let tempArray = finalProductsArray.filter((ele) => {
          return filteredList.includes(ele);
        });
        finalProductsArray = tempArray;
      }
      if (filter.gender !== null) {
        let filteredList = productList.products.filter((product) => {
          return product.gender.toLowerCase() === filter.gender.toLowerCase();
        });
        let tempArray = finalProductsArray.filter((ele) => {
          return filteredList.includes(ele);
        });
        finalProductsArray = tempArray;
      }
      if (filter.price !== null) {
        let filteredList = productList.products.filter((product) => {
          return filter.price === "1"
            ? product.price <= 250
            : filter.price === "2"
            ? product.price > 250 && product.price <= 450
            : product.price > 450;
        });
        let tempArray = finalProductsArray.filter((ele) => {
          return filteredList.includes(ele);
        });
        finalProductsArray = tempArray;
      }

      setProductsArray(finalProductsArray);
    } else {
      if (productList.loading === false && productList.products) {
        setProductsArray(productList.products);
      }
    }
  }, [filters]);

  return (
    <div>
      {productList.loading && loading ? (
        <div
          className="spinner-border m-auto d-flex align-items-center justify-content-center"
          role="status"
        ></div>
      ) : (
        <div>
          <div className="text-center mt-3 mb-3">
            <span
              style={{
                fontFamily: "serif",
              }}
            >
              {productsArray.length} Products Found
            </span>
          </div>
          <div className="wrapper">
            {productsArray.map((product, index) => {
              return (
                <div className="item" key={index}>
                  <ProductCard product={product} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  productList: state.productList,
  searchKeyword: state.searchKeyWord,
  filters: state.filters,
});

const mapDispatchToProps = {
  getProductsList,
  updateProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
