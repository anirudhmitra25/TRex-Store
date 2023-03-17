import axios from "axios";
export const getProductsList = () => async (dispatch) => {
  try {
    dispatch({
      type: "PRODUCT_LIST_REQUEST",
    });
    const { data } = await axios.get(
      `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`
    );
    dispatch({
      type: "PRODUCT_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "PRODUCT_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const setSearchKeyWord = (data) => (dispatch) => {
  dispatch({
    type: "SET_SEARCH",
    payload: data,
  });
};

export const setFilter = (data) => (dispatch) => {
  dispatch({
    type: "SET_FILTER",
    payload: data,
  });
};

export const updateProduct = (data) => (dispatch) => {
  dispatch({
    type: "UPDATE_PRODUCT_ADD",
    payload: data,
  });
};

export const updateProductRemove = (data) => (dispatch) => {
  dispatch({
    type: "UPDATE_PRODUCT_REMOVE",
    payload: data,
  });
};

export const updateProducts = (data) => (dispatch) => {
  dispatch({
    type: "UPDATE_PRODUCTS",
    payload: data,
  });
};
