import Button from "../components/shared/Button";
import ArticleItem from "../components/ArticleItem";
import MainTitle from "../components/shared/MainTitle";
import { getQueryStr } from "../helpers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actFetchSearchPostsAsync } from "../store/searchPost/action";

function SearchPage() {
  const queryStr = getQueryStr("q");
  console.log("queryStr", queryStr);

  let { searchPost } = useSelector((state) => state.searchReducer);
  console.log("searchPost", searchPost);
  // let dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(actFetchSearchPostsAsync(queryStr));
  //   console.log(queryStr);
  // }, [dispatch, queryStr]);

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">
          10 kết quả tìm kiếm với từ khóa "{queryStr}"
        </MainTitle>

        <div className="tcl-row tcl-jc-center">
          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItem
              isStyleCard
              isShowCategoies
              isShowAvatar={false}
              isShowDesc={false}
            />
          </div>
          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItem
              isStyleCard
              isShowCategoies
              isShowAvatar={false}
              isShowDesc={false}
            />
          </div>
          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItem
              isStyleCard
              isShowCategoies
              isShowAvatar={false}
              isShowDesc={false}
            />
          </div>
        </div>

        <div className="text-center">
          <Button type="primary" size="large">
            Tải thêm
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
