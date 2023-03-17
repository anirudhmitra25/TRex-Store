import React from "react";
import Search from "./SearchBar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.css";
const Header = ({ cartList }) => {
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <div className="header-wrapper d-flex">
      <h2 className="logo text-light">TeeRex Store</h2>
      {location.pathname !== "/cart" && (
        <>
          <div className="child-wrapper">
            <Search />
          </div>
          <div className="cart-icon-wrapper">
            <AiOutlineShoppingCart
              onClick={() => {
                navigate("/cart");
              }}
              className="cart-icon text-light"
            ></AiOutlineShoppingCart>
            <span className="text-light badge badge-light">
              {cartList.cartSize}
            </span>
          </div>
        </>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartList: state.cart,
});
export default connect(mapStateToProps)(Header);
