import { mappingPostData } from "../../helpers";
import searchService from "../../services//searchService";
export const ACT_FETCH_SEARCH_POST = "ACT_FETCH_SEARCH_POST";
export const ACT_VALUE_INPUT = "ACT_VALUE_INPUT";

// search post
export function actFetchSearchPosts(posts, page, totalpages) {
  return {
    type: ACT_FETCH_SEARCH_POST,
    payload: { posts, page, totalpages },
  };
}

export function actFetchSearchPostsAsync(inputValue, page = 1) {
  return async (dispatch) => {
    const response = await searchService.getSearchPost(inputValue, page);
    let totalpages = response.headers["x-wp-totalpages"] * 1;
    let posts = response.data.map(mappingPostData);
    dispatch(actFetchSearchPosts(posts, page, totalpages));
  };
}

// value input
export function actSetValueInput(value) {
  return {
    type: ACT_VALUE_INPUT,
    payload: value,
  };
}
