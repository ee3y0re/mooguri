import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import ProductsReducer from "./products_reducer";
import ReviewsReducer from "./reviews_reducer"
import CartsReducer from "./cart_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  products: ProductsReducer,
  reviews: ReviewsReducer,
  carts: CartsReducer
});

export default EntitiesReducer;