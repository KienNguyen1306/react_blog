import { useSelector } from "react-redux";
import ArticleItem from "../ArticleItem";
import "./popular-news-list.css";

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
                <ArticleItem
                  item={listPopular[0]}
                  isStyleCard
                  isShowCategoies
                  isShowDesc
                />
              </div>
            </div>
            <div className="popular-news__list--row">
              <div className="popular-news__list--card">
                <ArticleItem
                  item={listPopular[1]}
                  isStyleCard
                  isShowCategoies
                  isShowDesc
                />
              </div>
            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              {/* Popular news card */}
              <div className="popular-news__list--card">
                <ArticleItem
                  item={listPopular[2]}
                  isStyleCard
                  isStyleRow
                  isShowDesc
                />
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
