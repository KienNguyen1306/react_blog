import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import listLatest from "./posts/postLatest";
import listPopular from "./posts/postPopular";
import listGeneral from "./posts/postGenelral";
import postDetail from "./posts/postDetail";
import menusReducer from "./menus/menusReducer";
import caterogyReducer from "./caterogys/caterogyReducer";
import searchReducer from './searchPost/searchPostReducer'


const rootReducer = combineReducers({
  listLatest,
  listPopular,
  listGeneral,
  postDetail,
  menusReducer,
  caterogyReducer,
  searchReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
