import "./latest-news-list.css";
import ArticleItem from "../ArticleItem";
import MainTitle from "../shared/MainTitle";
import { useSelector } from "react-redux";
import Skeleton from "../Skeleton";

function ArticleLatest() {
  let listLatest = useSelector((state) => state.POST.listLatest);
  if (listLatest.length === 0) {
    return (
      <div className="latest-news section">
        <div className="tcl-container">
          <MainTitle />
          <div className="latest-news__list spacing">
            <div className="latest-news__card">
              <Skeleton isShowAvatar />
            </div>
            <div className="latest-news__card">
              <Skeleton isShowAvatar />
            </div>
            <div className="latest-news__card">
              <Skeleton isShowAvatar />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <MainTitle />
        <div className="latest-news__list spacing">
          {listLatest.map((item) => {
            return (
              <div key={item.id} className="latest-news__card">
                <ArticleItem item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ArticleLatest;
