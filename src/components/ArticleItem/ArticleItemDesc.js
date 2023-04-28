export default function ArticleItemDesc({ shortDesc }) {
  return (
    <p className="article-item__desc line-clamp-3 line-clamp-2">
      {shortDesc}
      {/* .rendered.replace(/(<([^>]+)>)/gi, "") */}
    </p>
  );
}
