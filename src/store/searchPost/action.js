import searchService from "../../services//searchService";
export const ACT_FETCH_SEARCH_POST = "ACT_FETCH_SEARCH_POST";

// latter
export function actFetchSearchPosts(posts) {
  return {
    type: ACT_FETCH_SEARCH_POST,
    payload: posts,
  };
}

export function actFetchSearchPostsAsync(inputValue) {
  return async (dispatch) => {
    const response = await searchService.getSearchPost(inputValue);
    console.log(response);
    // const caterogy = response.data.map(mappingCaterogyData);
    dispatch(actFetchSearchPosts(response));
  };
}
