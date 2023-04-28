import { ACT_FETCH_ARTICLRSE_POPULAR } from "../posts/actions";

const initState = {
  listPopular: [],
};

function Reducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ARTICLRSE_POPULAR:
      return { ...state, listPopular: action.payload };
    default:
      return state;
  }
}

export default Reducer;
