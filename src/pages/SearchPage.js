import ArticleItem from "../components/ArticleItem";
import MainTitle from "../components/shared/MainTitle";
import { getQueryStr } from "../helpers";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { actFetchArticlesPagingAsync } from "../store/posts/actions";

import { useLocation } from "react-router-dom";

import usePostPaging from "../hooks/usePostPaging";

function SearchPage() {
  const location = useLocation();
  const queryStr = getQueryStr("q", location.search);
  const inputParam = { search: queryStr };
  let dispatch = useDispatch();
  const { lists, renderButtonLoadMore, totalItem } = usePostPaging(inputParam);

  useEffect(() => {
    dispatch(actFetchArticlesPagingAsync({ inputParam }));
  }, [dispatch, queryStr]);

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">
          {totalItem} kết quả tìm kiếm với từ khóa "{queryStr}"
        </MainTitle>

        <div className="tcl-row tcl-jc-center">
          {lists.map((item) => {
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
        {renderButtonLoadMore()}
      </div>
    </div>
  );
}

export default SearchPage;
