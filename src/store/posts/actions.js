import postService from "../../services/postService";
import { mappingPostData, mappingPostDetain } from "../../helpers";

export const ACT_FETCH_ARTICLRSE_LATEST = "ACT_FETCH_ARTICLRSE_LATEST";
export const ACT_FETCH_ARTICLRSE_POPULAR = "ACT_FETCH_ARTICLRSE_POPULAR";
export const ACT_FETCH_ARTICLRSE_PAGING = "ACT_FETCH_ARTICLRSE_PAGING";
export const ACT_FETCH_ARTICLRSE_POST_DETAIL =
  "ACT_FETCH_ARTICLRSE_POST_DETAIL";
export const ACT_FETCH_SEARCH_POST = "ACT_FETCH_SEARCH_POST";
export const ACT_FETCH_RELATED_POST = "ACT_FETCH_RELATED_POST";
export const ACT_FETCH_CATEROGY_POST = "ACT_FETCH_CATEROGY_POST";

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
export function actFetchArticlesPaging(
  posts,
  currenPage,
  totalpages,
  totalItem
) {
  return {
    type: ACT_FETCH_ARTICLRSE_PAGING,
    payload: { posts, currenPage, totalpages, totalItem },
  };
}

export function actFetchArticlesPagingAsync({
  page = 1,
  inputParam = {},
} = {}) {
  return async (dispatch) => {
    const response = await postService.getPaging({ page, inputParam });
    let totalpages = response.headers.get("x-wp-totalpages");
    let totalItem = response.headers.get("x-wp-total");
    const posts = response.data.map(mappingPostData);
    dispatch(
      actFetchArticlesPaging(posts, page, totalpages * 1, totalItem * 1)
    );
  };
}

//post detail
export function actFetchArticlesPostDetail(postsDetail, postsRelated) {
  return {
    type: ACT_FETCH_ARTICLRSE_POST_DETAIL,
    payload: { postsDetail, postsRelated },
  };
}

export function actFetchArticlesPostDetailAsync(slug) {
  return async (dispatch) => {
    // post detail
    const response = await postService.getPostDetail(slug);
    const postsDetail = mappingPostDetain(response.data[0]);
    //post related
    const resRelated = await postService.getRelatedPosts(
      postsDetail.author,
      postsDetail.id
    );

    const postsRelated = resRelated.data.map(mappingPostDetain);

    dispatch(actFetchArticlesPostDetail(postsDetail, postsRelated));
  };
}

//post caterogy
// latter
export function actFetchCaterogyPost(posts) {
  return {
    type: ACT_FETCH_CATEROGY_POST,
    payload: posts,
  };
}

export function actFetchCaterogyPostAsync(slug) {
  return async (dispatch) => {
    const res = await postService.getCaterogyID(slug);

    const caterogyID = res.data[0].id;
    const postCaterogy = await postService.getPostCaterogy(caterogyID);

    
    const data = postCaterogy.data.map(mappingPostData);
  
    dispatch(actFetchCaterogyPost(data));
  };
}
