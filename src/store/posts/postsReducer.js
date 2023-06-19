import {
  ACT_FETCH_ARTICLRSE_PAGING,
  ACT_FETCH_ARTICLRSE_LATEST,
  ACT_FETCH_ARTICLRSE_POPULAR,
  ACT_FETCH_ARTICLRSE_POST_DETAIL,
  ACT_FETCH_RELATED_POST,
  ACT_FETCH_CATEROGY_POST,
} from "./actions";

const initState = {
  listPopular: [],
  listLatest: [],
  listPaging: { lists: [], currenPage: 0, totalpages: 0, totalItem: 0 },
  postDetail: {},
  searchPost: { lists: [], curentPage: 0, totalpages: 0 },
  relatedPost: [],
  postCaterogy: [],
};

function postReducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ARTICLRSE_PAGING:
      return {
        ...state,
        listPaging: {
          lists:
            action.payload.currenPage === 1
              ? action.payload.posts
              : [...state.listPaging.lists, ...action.payload.posts],
          currenPage: action.payload.currenPage,
          totalpages: action.payload.totalpages,
          totalItem: action.payload.totalItem,
        },
      };

    case ACT_FETCH_ARTICLRSE_POPULAR:
      return { ...state, listPopular: action.payload };

    case ACT_FETCH_ARTICLRSE_LATEST:
      return { ...state, listLatest: action.payload };

    case ACT_FETCH_ARTICLRSE_POST_DETAIL:
      return {
        ...state,
        postDetail: action.payload.postsDetail,
        relatedPost: action.payload.postsRelated,
      };

    case ACT_FETCH_RELATED_POST:
      return { ...state, relatedPost: action.payload };
    case ACT_FETCH_CATEROGY_POST:
      return { ...state, postCaterogy: action.payload };
    default:
      return state;
  }
}

export default postReducer;
