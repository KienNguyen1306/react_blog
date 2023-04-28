import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ArticleGeneral from "../components/ArticleGeneral";
import ArticleLatest from "../components/ArticleLatest";
import ArticlePopular from "../components/ArticlePopular";
import {
  actFetchArticlesGenerralAsync,
  actFetchArticlesLatestAsync,
  actFetchArticlesPopularAsync,
} from "../store/posts/actions";

function HomePage() {
  let { currenPage } = useSelector((state) => state.listGeneral);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchArticlesLatestAsync());
    dispatch(actFetchArticlesPopularAsync());
    if (currenPage === 0) dispatch(actFetchArticlesGenerralAsync());
  }, [currenPage, dispatch]);

  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleGeneral />
    </>
  );
}

export default HomePage;
