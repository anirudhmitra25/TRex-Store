import * as constants from "../../types/constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case constants.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case constants.PRODUCT_LIST_SUCCESS:
      var products = action.payload.map((item) => ({ ...item, cart_val: 0 }));
      return {
        loading: false,
        products: products,
      };
    case constants.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    case constants.UPDATE_PRODUCT_ADD:
      var product = action.payload;

      state.products.forEach((item) => {
        if (item.id === product.id) {
          item.cart_val += 1;
        }
      });
      return { ...state };

    case constants.UPDATE_PRODUCT_REMOVE:
      var product = action.payload;
      state.products.forEach((item) => {
        if (item.id === product.id) {
          item.cart_val -= 1;
        }
      });
      return { ...state };

    case constants.UPDATE_PRODUCTS:
      return { loading: false, products: action.payload };

    default:
      return state;
  }
};

export const setSearchKeyWordReducer = (
  state = { searchKeyword: null },
  action
) => {
  switch (action.type) {
    case constants.SET_SEARCH:
      return { searchKeyword: action.payload };
    default:
      return state;
  }
};

export const setFiltersReducer = (
  state = {
    filters: {
      color: null,
      gender: null,
      price: null,
      type: null,
    },
  },
  action
) => {
  switch (action.type) {
    case constants.SET_FILTER:
      return {
        filters: action.payload,
      };
    default:
      return state;
  }
};
