import { useDispatch, useSelector } from "react-redux";
import "./post-author.css";
import { actFetchCommentsAsync } from "../../store/comment/actions";
import { useState } from "react";

function PostDetailCommentAction({
  restTotal,
  parent,
  currentPage,
  className,
}) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const postID = useSelector((state) => state.POST.postDetail.id);

  function handleSeeMore(e) {
    e.preventDefault();
    setLoading(false);
    dispatch(
      actFetchCommentsAsync({
        post: postID,
        parent,
        currentPage: currentPage + 1,
      })
    ).then(() => {
      setLoading(true);
    });
  }
  return (
    <div className={`comments__hidden ${className}`}>
      <a href="/" onClick={handleSeeMore}>
        {!className && <i className="icons ion-ios-undo" />}
        {loading
          ? `Xem thêm ${restTotal} câu trả lời`
          : `Loading... ${restTotal} câu trả lời `}
      </a>
    </div>
  );
}

export default PostDetailCommentAction;
