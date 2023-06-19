import { ACT_FETCH_COMMENTS_PARENT, ACT_FETCH_COMMENTS_CHILD } from "./actions";

const initState = {
  dataParentComment: {
    list: [],
    currentPage: 0,
    totalPages: 1,
    totalItem: 1,
  },
  dataChildComment: { list: [], currentPage: 0, totalPages: 1, totalItem: 1 },
};

function commentReducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_COMMENTS_PARENT:
      return {
        ...state,
        dataParentComment: {
          ...state.dataParentComment,
          list:
            action.payload.currentPage === 1
              ? action.payload.list
              : [...state.dataParentComment.list, ...action.payload.list],
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages,
          totalItem: action.payload.totalItem,
        },
      };

    case ACT_FETCH_COMMENTS_CHILD:
      const parent = action.payload.parent;
      return {
        ...state,
        dataChildComment: {
          ...state.dataChildComment,
          [parent]: {
            list:
              action.payload.currentPage === 1
                ? action.payload.list
                : [
                    ...state.dataChildComment[parent].list,
                    ...action.payload.list,
                  ],
            currentPage: action.payload.currentPage,
            totalPages: action.payload.totalPages,
            totalItem: action.payload.totalItem,
          },
        },
      };
    default:
      return state;
  }
}

export default commentReducer;
