import "./Skeleton.css";
import cls from "classnames";

function Skeleton({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategoies = false,
  isShowAvatar = false,
  item,
}) {
  const classes = cls("article-item", {
    "style-card": isStyleCard,
    "style-row": isStyleRow,
  });
  return (
    <article className={classes}>
      <div className="skeleton article-item__thumbnail"></div>
      <div className="article-item__content">
        {isShowCategoies && (
          <div className="article-item__caterogy">
            <div className="left">
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>
            </div>
            <div className="right">
              <div className="skeleton skeleton-text"></div>
            </div>
          </div>
        )}

        <h2 className="article-item__title">
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </h2>
        {isShowDesc && (
          <div className="skeleton-des">
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
        )}

        <div className="article-item__info text">
          {isShowAvatar && (
            <div className="article-item__author-image">
              <a aria-label="John Doe" href="/">
                <div className="skeleton skeleton-text" />
              </a>
            </div>
          )}

          <div className="article-item__info-right">
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Skeleton;
