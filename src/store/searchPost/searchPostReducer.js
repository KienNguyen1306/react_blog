import { ACT_FETCH_SEARCH_POST } from "./action";

const initState = {
  searchPost: [],
};

function searchReducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_SEARCH_POST:
      return { ...state, searchPost: action.payload };
    default:
      return state;
  }
}

export default searchReducer;
