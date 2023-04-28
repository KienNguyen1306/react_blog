import { ACT_FETCH_ARTICLRSE_LATEST } from "./actions";

const initState = {
  listLatest: [],
};

function Reducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ARTICLRSE_LATEST:
      return { ...state, listLatest: action.payload };
    default:
      return state;
  }
}

export default Reducer;
