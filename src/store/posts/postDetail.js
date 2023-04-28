import { ACT_FETCH_ARTICLRSE_POST_DETAIL } from "../posts/actions";

const initState = {};

function Reducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ARTICLRSE_POST_DETAIL:
      return { ...action.payload };
    default:
      return state;
  }
}

export default Reducer;
