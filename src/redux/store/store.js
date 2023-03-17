import { createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer } from "../reducers/cartReducer";
import {
  productListReducer,
  setSearchKeyWordReducer,
  setFiltersReducer,
} from "../reducers/productReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  productList: productListReducer,
  cart: cartReducer,
  searchKeyWord: setSearchKeyWordReducer,
  filters: setFiltersReducer,
});

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
