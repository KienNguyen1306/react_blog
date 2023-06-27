import { useSelector } from "react-redux";
import ArticleItem from "../ArticleItem";
import "./popular-news-list.css";
import Skeleton from "../Skeleton";

function ArticlePopular() {
  let listPopular = useSelector((state) => state.POST.listPopular);

  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        {/* Main Title */}
        <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
          <h2>Popular Articles</h2>
          <a href="/" className="btn btn-default">
            View More
          </a>
        </div>
        {/* End Main Title */}
        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">
              <div className="popular-news__list--card">
                {listPopular.length > 0 ? (
                  <ArticleItem
                    item={listPopular[0]}
                    isStyleCard
                    isShowCategoies
                    isShowDesc
                  />
                ) : (
                  <Skeleton
                    isStyleCard
                    isShowCategoies
                    isShowDesc
                    isShowAvatar
                  />
                )}
              </div>
            </div>
            <div className="popular-news__list--row">
              <div className="popular-news__list--card">
                {listPopular.length > 0 ? (
                  <ArticleItem
                    item={listPopular[1]}
                    isStyleCard
                    isShowCategoies
                    isShowDesc
                  />
                ) : (
                  <Skeleton
                    isStyleCard
                    isShowCategoies
                    isShowDesc
                    isShowAvatar
                  />
                )}
              </div>
            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              {/* Popular news card */}
              <div className="popular-news__list--card">
                {listPopular.length > 0 ? (
                  <ArticleItem
                    item={listPopular[2]}
                    isStyleCard
                    isStyleRow
                    isShowDesc
                  />
                ) : (
                  <Skeleton isStyleCard isStyleRow isShowDesc isShowAvatar />
                )}
              </div>
              {/* End Popular news card */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePopular;
