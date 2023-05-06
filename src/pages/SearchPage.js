import Button from "../components/shared/Button";
import ArticleItem from "../components/ArticleItem";
import MainTitle from "../components/shared/MainTitle";
import { getQueryStr } from "../helpers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actFetchSearchPostsAsync } from "../store/searchPost/action";

import { useLocation } from "react-router-dom";

function SearchPage() {
  const queryStr = getQueryStr("q");
  const location = useLocation();


  let dispatch = useDispatch();
  let { searchPost, curentPage, totalpages } = useSelector(
    (state) => state.searchReducer
  );


  useEffect(() => {
    dispatch(actFetchSearchPostsAsync(queryStr));
  }, [dispatch, queryStr, location.search]);



  function handleLoadMore() {
    dispatch(actFetchSearchPostsAsync(queryStr, curentPage + 1));
  }


  
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">
          {searchPost.length} kết quả tìm kiếm với từ khóa "{queryStr}"
        </MainTitle>

        <div className="tcl-row tcl-jc-center">
          {searchPost.map((item) => {
            return (
              <div key={item.id} className="tcl-col-12 tcl-col-md-8">
                <ArticleItem
                  item={item}
                  isStyleCard
                  isShowCategoies
                  isShowAvatar={false}
                  isShowDesc={false}
                />
              </div>
            );
          })}
        </div>
        {totalpages > 1 && (
          <div className="text-center">
            {curentPage !== totalpages && (
              <Button type="primary" size="large" onClick={handleLoadMore}>
                Tải thêm
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
