import { useDispatch } from "react-redux";
import { useEffect } from "react";

import ArticleGeneral from "../components/ArticleGeneral";
import ArticleLatest from "../components/ArticleLatest";
import ArticlePopular from "../components/ArticlePopular";
import {
  actFetchArticlesLatestAsync,
  actFetchArticlesPagingAsync,
  actFetchArticlesPopularAsync,
} from "../store/posts/actions";

function HomePage() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchArticlesLatestAsync());
    dispatch(actFetchArticlesPopularAsync());
    dispatch(actFetchArticlesPagingAsync());
  }, [dispatch]);

  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleGeneral />
    </>
  );
}

export default HomePage;
