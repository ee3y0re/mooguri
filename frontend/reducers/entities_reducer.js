import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import ProductsReducer from "./products_reducer";
import ReviewsReducer from "./reviews_reducer"

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  products: ProductsReducer,
  reviews: ReviewsReducer
});

export default EntitiesReducer;