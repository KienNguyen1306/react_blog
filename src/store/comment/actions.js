import { mappingCommetData } from "../../helpers";
import commentService from "../../services/commentService";

export const ACT_FETCH_COMMENTS_PARENT = "ACT_FETCH_COMMENTS_PARENT";
export const ACT_FETCH_COMMENTS_CHILD = "ACT_FETCH_COMMENTS_CHILD";

export function actFetchCommentsParent({
  list,
  currentPage,
  totalPages,
  totalItem,
}) {
  return {
    type: ACT_FETCH_COMMENTS_PARENT,
    payload: {
      list,
      currentPage,
      totalItem,
      totalPages,
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
} = {}) {
  return async (dispatch) => {
    const res = await commentService.getAll({
      page: currentPage,
      post: postId,
      parent,
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
        })
      );
    }
  };
}
