import { ACT_FETCH_ARTICLRSE_GENELRAL } from "./actions";

const initState = {
  listGeneral: [],
  currenPage: 0,
  totalpages: 1,
};

function Reducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ARTICLRSE_GENELRAL:
      return {
        ...state,
        currenPage: action.payload.currenPage,
        listGeneral: [...state.listGeneral, ...action.payload.posts],
        totalpages: action.payload.totalpages,
      };
    default:
      return state;
  }
}

export default Reducer;
