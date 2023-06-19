// import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ArticleItemCategories({ caterogies }) {
  let caterogy = useSelector((state) => state.CATEROGY.caterogy);

  return (
    <ul className="article-item__categories">
      {Object.keys(caterogy).length > 0 &&
        caterogies.map((cate) => {
          return (
            <li key={cate}>
              <Link
                to={`/caterogy/${caterogy[cate].slug}`}
                className="btn btn-category"
              >
                {caterogy[cate].name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
