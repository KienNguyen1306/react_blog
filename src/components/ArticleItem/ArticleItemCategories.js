// import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";

export default function ArticleItemCategories({ caterogies }) {
  let { caterogy } = useSelector((state) => state.caterogyReducer);
  return (
    <ul className="article-item__categories">
      {Object.keys(caterogy).length > 0 &&
        caterogies.map((cate) => {
          return (
            <li key={cate}>
              <a href="/" className="btn btn-category">
                {caterogy[cate].name}
              </a>
            </li>
          );
        })}
    </ul>
  );
}
