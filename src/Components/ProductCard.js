import React, { useEffect, useState } from "react";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import { updateProduct } from "../redux/actions/productActions";
import { connect } from "react-redux";
import "./ProductCard.css";
const ProductCard = ({ product, addToCart, updateProduct }) => {
  const handleAddToCart = () => {
    if (product.quantity > product.cart_val) {
      updateProduct(product);
      addToCart(product);
      alert("Item added to Cart");
    } else {
      alert("Item Out of Stock");
    }
  };
  return (
    <div className="custom-card mx-3 pt-2 my-1 my-4 shadow-sm bg-white">
      <div className="product-img-container px-3 ">
        <img
          className="product-img"
          src={product.imageURL}
          width={150}
          height={150}
        />
      </div>

      <div className="custom-card-content justify-content-between pt-3 px-3 ">
        <div>
          <h5>{product.name}</h5>
          <span>Rs {product.price}</span>
        </div>
      </div>
      <div
        onClick={() => {
          handleAddToCart();
        }}
        className="add-to-cart-wrapper"
      >
        Add To Cart
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartList: state.cart,
});

const mapDispatchToProps = {
  removeFromCart,
  addToCart,
  updateProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
