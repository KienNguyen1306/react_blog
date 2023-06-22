import { useEffect } from "react";
import PostDetaiCommentItem from "./PostDetaiCommentItem";
import PostDetailCommemtForm from "./PostDetailCommemtForm";
import "./comments.css";
import { useDispatch, useSelector } from "react-redux";
import { actFetchCommentsAsync } from "../../store/comment/actions";
import PostDetailCommentAction from "./PostDetailCommentAction";

function PostDetailComments() {
  const postID = useSelector((state) => state.POST.postDetail.id);
  const { list, currentPage, totalItem } = useSelector(
    (state) => state.COMMENT.dataParentComment
  );

  let restTotal = totalItem - list.length;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      actFetchCommentsAsync({ currentPage: 1, parent: 0, postId: postID })
    );
  }, [postID]);

  return (
    <>
      <div className="post-detail__comments">
        <PostDetailCommemtForm postID={postID}/>
        <p>{totalItem} Comments</p>

        {list.length > 0 && (
          <ul className="comments">
            {list.map((item) => {
              return <PostDetaiCommentItem key={item.id} data={item} />;
            })}
          </ul>
        )}
      </div>
      {restTotal > 0 && (
        <PostDetailCommentAction
          restTotal={restTotal}
          parent={0}
          currentPage={currentPage}
          className="load-comment"
        />
      )}
    </>
  );
}

export default PostDetailComments;
