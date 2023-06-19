import { useSelector } from "react-redux";
import ArticleRelated from "../ArticleItem/ArticleRelated";

function PostDetailRelatedPosts() {
  let relatedPost = useSelector((state) => state.POST.relatedPost);
  return (
    <div className="related-post">
      <h2 className="related-post__head">Related Posts</h2>
      {relatedPost.map((item, index) => {
        return <ArticleRelated key={index} item={item} />;
      })}
    </div>
  );
}

export default PostDetailRelatedPosts;
