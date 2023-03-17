import React from "react";
import { removeFromCart } from "../redux/actions/cartActions";
import { updateProductRemove } from "../redux/actions/productActions";
import { connect } from "react-redux";

const CartItem = ({ product, removeFromCart, updateProductRemove }) => {
  return (
    <div className="card my-3 px-3 py-3 shadow">
      <div className="row mt-3">
        <div className="col-sm">
          <div className="d-flex">
            <img src={product.imageURL} width={100} height={100} />
            <div className="px-3">
              <h5>{product.name}</h5>
              <span>{product.type}</span>
            </div>
          </div>
        </div>
        <div className="col-sm">{product.price}</div>
        <div className="col-sm">{product.cart_val}</div>
        <div className="col-sm">
          {product.cart_val > 0 && (
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => {
                if (product.cart_val > 0) {
                  updateProductRemove(product);
                  removeFromCart(product);
                }
              }}
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartList: state.cart,
});

const mapDispatchToProps = {
  updateProductRemove,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
