import "./latest-news-list.css";
import ArticleItem from "../ArticleItem";
import MainTitle from "../shared/MainTitle";
import { useSelector } from "react-redux";

function ArticleLatest() {
  let listLatest = useSelector((state) => state.POST.listLatest);

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
