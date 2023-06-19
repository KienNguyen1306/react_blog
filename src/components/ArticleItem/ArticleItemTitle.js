import { Link, useLocation } from "react-router-dom";
import { getQueryStr } from "../../helpers";

export default function ArticleItemTitle({ title, slug }) {
  const location = useLocation();
  const queryStr = getQueryStr("q", location.search);

  const highlightSearch = (text) => {
    const regex = new RegExp(`(${queryStr})`, "gi"); // phân biệt hoa thường
    return text.replace(regex, "<mark>$1</mark>"); // tìm kiếm thay thế
  };

  return (
    <h2 className="article-item__title">
      <Link
        to={`/post/${slug}`}
        dangerouslySetInnerHTML={{ __html: highlightSearch(title) }}
      />
    </h2>
  );
}
