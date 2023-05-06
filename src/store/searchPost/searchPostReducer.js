import { ACT_FETCH_SEARCH_POST } from "./action";

const initState = {
  valueInput: "",
  curentPage: 0,
  totalpages: 0,
  searchPost: [],
};

function searchReducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_SEARCH_POST:
      return {
        ...state,
        curentPage: action.payload.page,
        totalpages: action.payload.totalpages,
        searchPost: action.payload.posts,
      };
    default:
      return state;
  }
}

export default searchReducer;
