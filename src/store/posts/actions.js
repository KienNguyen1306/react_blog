import postService from "../../services/postService";
import { mappingPostData, mappingPostDetain } from "../../helpers";
export const ACT_FETCH_ARTICLRSE_LATEST = "ACT_FETCH_ARTICLRSE_LATEST";
export const ACT_FETCH_ARTICLRSE_POPULAR = "ACT_FETCH_ARTICLRSE_POPULAR";
export const ACT_FETCH_ARTICLRSE_GENELRAL = "ACT_FETCH_ARTICLRSE_GENELRAL";
export const ACT_FETCH_ARTICLRSE_POST_DETAIL =
  "ACT_FETCH_ARTICLRSE_POST_DETAIL";

// latter
export function actFetchArticlesLatest(posts) {
  return {
    type: ACT_FETCH_ARTICLRSE_LATEST,
    payload: posts,
  };
}

export function actFetchArticlesLatestAsync() {
  return async (dispatch) => {
    const response = await postService.getLatest();
    const posts = response.data.map(mappingPostData);
    dispatch(actFetchArticlesLatest(posts));
  };
}

//popular
export function actFetchArticlesPopular(posts) {
  return {
    type: ACT_FETCH_ARTICLRSE_POPULAR,
    payload: posts,
  };
}

export function actFetchArticlesPopularAsync() {
  return async (dispatch) => {
    const response = await postService.getPopular();
    const posts = response.data.map(mappingPostData);
    dispatch(actFetchArticlesPopular(posts));
  };
}

//genelral
export function actFetchArticlesGenelral(posts, currenPage, totalpages) {
  return {
    type: ACT_FETCH_ARTICLRSE_GENELRAL,
    payload: { posts, currenPage, totalpages },
  };
}

export function actFetchArticlesGenerralAsync(page = 1) {
  return async (dispatch) => {
    const response = await postService.getGenelral(page);
    let totalpages = response.headers.get("x-wp-totalpages");
    const posts = response.data.map(mappingPostData);
    dispatch(actFetchArticlesGenelral(posts, page, totalpages * 1));
  };
}

//post detail
export function actFetchArticlesPostDetail(posts) {
  return {
    type: ACT_FETCH_ARTICLRSE_POST_DETAIL,
    payload: posts,
  };
}

export function actFetchArticlesPostDetailAsync(slug) {
  return async (dispatch) => {
    const response = await postService.getPostDetail(slug);
    const posts = mappingPostDetain(response.data[0]);
    dispatch(actFetchArticlesPostDetail(posts));
  };
}
