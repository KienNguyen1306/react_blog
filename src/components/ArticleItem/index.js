import "./article-item.css";
import cls from "classnames";
import ArticleItemDesc from "./ArticleItemDesc";
import ArticleItemThumb from "./ArticleItemThumb";
import ArticleItemTitle from "./ArticleItemTitle";
import ArticleItemInfo from "./ArticleItemInfo";
import ArticleItemCategories from "./ArticleItemCategories";
import ArticleItemStats from "./ArticleItemStats";

export default function ArticleItem({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategoies = false,
  isShowAvatar = true,
  item,
}) {
  const classes = cls("article-item", {
    "style-card": isStyleCard,
    "style-row": isStyleRow,
  });

 

  if (!item) return <></>;

  return (
    <article className={classes}>
      <ArticleItemThumb image={item.thumb} />
      <div className="article-item__content">
        {isShowCategoies && <ArticleItemCategories caterogies={item.categories}/>}
        {isShowCategoies && <ArticleItemStats view={item.view} />}
        <ArticleItemTitle title={item.title} slug={item.slug} />
        {isShowDesc && <ArticleItemDesc shortDesc={item.shortDesc} />}
        <ArticleItemInfo
          user={item.user}
          isShowAvatar={isShowAvatar}
          date={item.date}
        />
      </div>
    </article>
  );
}
