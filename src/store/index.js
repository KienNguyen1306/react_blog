import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import menusReducer from "./menus/menusReducer";
import caterogyReducer from "./caterogys/caterogyReducer";
import postReducer from "./posts/postsReducer";
import userReducer from "./user/userReducer";
import commentReducer from "./comment/commentReducer";
const rootReducer = combineReducers({
  POST: postReducer,
  MENU: menusReducer,
  CATEROGY: caterogyReducer,
  USER: userReducer,
  COMMENT: commentReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
