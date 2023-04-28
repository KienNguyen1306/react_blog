// import { Link } from 'react-router-dom';

export default function ArticleItemThumb({ image }) {
  return (
    <div className="article-item__thumbnail">
      <a href="/">
        <img src={image} alt="assets/images/blog-1.jpg" />
      </a>
    </div>
  );
}
