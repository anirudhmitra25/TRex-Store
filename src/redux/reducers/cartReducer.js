import * as constants from "../../types/constants/cartConstants";

export const cartReducer = (state = { cartItems: [], cartSize: 0 }, action) => {
  switch (action.type) {
    case constants.CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.id === item.id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existItem.id ? item : x
          ),
          cartSize: state.cartSize + 1,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
          cartSize: state.cartSize + 1,
        };
      }

    case constants.CART_REMOVE_ITEM:
      if (action.payload.cart_val > 0) {
        return { ...state, cartSize: state.cartSize - 1 };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.id !== action.payload.id),
          cartSize: state.cartSize - 1,
        };
      }

    default:
      return state;
  }
};
