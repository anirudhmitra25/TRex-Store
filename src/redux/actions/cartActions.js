export const addToCart = (data) => (dispatch) => {
  dispatch({
    type: "CART_ADD_ITEM",
    payload: data,
  });
};

export const removeFromCart = (data) => (dispatch) => {
  dispatch({
    type: "CART_REMOVE_ITEM",
    payload: data,
  });
};
