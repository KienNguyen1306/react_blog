import {
  ACT_FETCH_COMMENTS_PARENT,
  ACT_FETCH_COMMENTS_CHILD,
  ACT_FETCH_POST_COMMENTS_PARENT,
  ACT_FETCH_POST_COMMENTS_CHILD,
} from "./actions";

const initState = {
  dataParentComment: {
    list: [],
    currentPage: 0,
    totalPages: 1,
    totalItem: 1,
    exclude: [],
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
          totalPages:
            action.payload.currentPage === 1
              ? action.payload.totalPages
              : state.dataParentComment.totalPages,
          totalItem:
            action.payload.currentPage === 1
              ? action.payload.totalItem
              : state.dataParentComment.totalItem,
          exclude: [],
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

    case ACT_FETCH_POST_COMMENTS_PARENT:
      return {
        ...state,
        dataParentComment: {
          ...state.dataParentComment,
          list: [action.payload.comments, ...state.dataParentComment.list],
          totalItem: state.dataParentComment.totalItem + 1,
          exclude: [
            action.payload.comments.id,
            ...state.dataParentComment.exclude,
          ],
        },
      };

    case ACT_FETCH_POST_COMMENTS_CHILD:
      const parentID = action.payload.parent;
      const isParentID = state.dataChildComment[parentID];
      return {
        ...state,
        dataChildComment: {
          ...state.dataChildComment,
          [parentID]: {
            list: isParentID
              ? [
                  action.payload.comments,
                  ...state.dataChildComment[parentID].list,
                ]
              : [action.payload.comments],
            currentPage: !action.payload.currentPage && 0,
            totalPages: action.payload.totalPages,
            totalItem: isParentID
              ? state.dataChildComment[parentID].totalItem + 1
              : action.payload.firstTotal + 1,
            exclude: isParentID ? "" : [action.payload.comments.id],
          },
        },
      };
    default:
      return state;
  }
}

export default commentReducer;
