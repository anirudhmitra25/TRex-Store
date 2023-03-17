import React from "react";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import { connect } from "react-redux";
import CartItem from "../Components/CartItem";
import Header from "../Components/Header";
import { calculateTotal } from "../helper/calculateTotal";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cartList }) => {
  let navigate = useNavigate();
  return (
    <div>
      <Header />
      <div
        className="d-flex"
        style={{
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <h2 className="cart-header">
          Your Cart{" "}
          {cartList.cartSize > 0
            ? cartList.cartSize === 1
              ? "(1 Item)"
              : `(${cartList.cartSize} Items)`
            : ""}
        </h2>
      </div>
      <div className="cart-wrapper">
        {cartList?.cartItems && cartList.cartItems?.length > 0 ? (
          <div className="d-flex flex-column">
            <div className="py-3">
              <div className="container">
                <div className="row">
                  <div className="col-sm-4">
                    <h5
                      style={{
                        fontFamily: "serif",
                      }}
                    >
                      Item
                    </h5>
                  </div>
                  <div className="col-sm">
                    <h5
                      style={{
                        fontFamily: "serif",
                      }}
                    >
                      Price
                    </h5>
                  </div>
                  <div className="col-sm">
                    <h5
                      style={{
                        fontFamily: "serif",
                      }}
                    >
                      Quantity
                    </h5>
                  </div>
                  <div className="col-sm"></div>
                </div>
                {cartList.cartItems.map((item) => {
                  return <CartItem product={item} />;
                })}
                <div
                  style={{
                    fontFamily: "serif",
                  }}
                  className="d-flex align-items-center"
                >
                  <h4 className="pl-3">Total: </h4>
                  <h4 className="mx-2">
                    Rs {calculateTotal(cartList.cartItems)}
                  </h4>
                </div>
              </div>
            </div>
            <div className="checkout-btn text-light text-center mx-auto">
              Checkout
            </div>
          </div>
        ) : (
          <div className="m-auto d-flex flex-column align-items-center justify-content-center">
            <h3>No Items Added Yet !</h3>
            <span>There's nothing in your cart. Let's add some items</span>
            <button
              type="button"
              className="mt-3 btn btn-outline-secondary"
              onClick={() => {
                navigate(-1);
              }}
            >
              Go back
            </button>
          </div>
        )}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
