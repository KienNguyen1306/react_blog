import { mappingCommetData } from "../../helpers";
import commentService from "../../services/commentService";

export const ACT_FETCH_COMMENTS_PARENT = "ACT_FETCH_COMMENTS_PARENT";
export const ACT_FETCH_COMMENTS_CHILD = "ACT_FETCH_COMMENTS_CHILD";
export const ACT_FETCH_POST_COMMENTS_PARENT = "ACT_FETCH_POST_COMMENTS_PARENT";
export const ACT_FETCH_POST_COMMENTS_CHILD = "ACT_FETCH_POST_COMMENTS_CHILD";

export function actFetchCommentsParent({
  list,
  currentPage,
  totalPages,
  totalItem,
  exclude = [],
}) {
  return {
    type: ACT_FETCH_COMMENTS_PARENT,
    payload: {
      list,
      currentPage,
      totalItem,
      totalPages,
      exclude,
    },
  };
}

export function actFetchCommentsChild({
  list,
  currentPage,
  totalPages,
  totalItem,
  parent,
}) {
  return {
    type: ACT_FETCH_COMMENTS_CHILD,
    payload: {
      list,
      currentPage,
      totalItem,
      totalPages,
      parent,
    },
  };
}

export function actFetchCommentsAsync({
  currentPage = 1,
  postId = 12,
  parent = 0,
  exclude = "",
} = {}) {
  return async (dispatch) => {
    const res = await commentService.getAll({
      page: currentPage,
      post: postId,
      parent,
      exclude,
    });
    const list = res.data.map(mappingCommetData);
    const totalItem = Number(res.headers["x-wp-total"]);
    const totalPages = Number(res.headers["x-wp-totalpages"]);
    if (parent === 0) {
      dispatch(
        actFetchCommentsParent({
          list,
          currentPage,
          totalItem,
          totalPages,
          exclude,
        })
      );
    } else {
      dispatch(
        actFetchCommentsChild({
          list,
          currentPage,
          totalItem,
          totalPages,
          parent,
          exclude,
        })
      );
    }
  };
}

export function actFetchPostCommentParent(comments) {
  return {
    type: ACT_FETCH_POST_COMMENTS_PARENT,
    payload: { comments },
  };
}

//post comment parent
export function actFetchPostCommentParentAsyns(data, firstTotal) {
  return async (dispatch) => {
    const res = await commentService.postComment(data);
    const list = mappingCommetData(res.data);
    if (data.parent === 0) {
      dispatch(actFetchPostCommentParent(list));
    } else {
      dispatch(actFetchPostCommentChild(data.parent, list, firstTotal));
    }
  };
}

export function actFetchPostCommentChild(parent, comments, firstTotal) {
  return {
    type: ACT_FETCH_POST_COMMENTS_CHILD,
    payload: { parent, comments, firstTotal },
  };
}
