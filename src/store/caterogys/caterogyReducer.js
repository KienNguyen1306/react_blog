import { ACT_FETCH_ALL_CATEROGY } from "./action";

const initState = {
  caterogy: {},
};

function caterogyReducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ALL_CATEROGY:
      return { ...state, caterogy: action.payload };
    default:
      return state;
  }
}

export default caterogyReducer;
