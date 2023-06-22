import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { actFetchPostCommentParentAsyns } from "../../store/comment/actions";
import { useState } from "react";

function PostDetailCommemtForm({ parent = 0, postID, firstTotal  }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  let currentUser = useSelector((state) => state.USER.currentUser);

  const [commment, setComment] = useState("");

  function handleOnchangeComment(e) {
    setComment(e.target.value);
  }

  function handleLogin() {
    history.push(`/login`, { from: location.pathname });
  }

  function handlePostComment(e) {
    e.preventDefault();
    let dataCommments = {
      author: currentUser.id,
      content: commment,
      post: postID,
      parent: parent,
    };
    dispatch(actFetchPostCommentParentAsyns(dataCommments, firstTotal ));
  }

  return (
    <div className="comments__form">
      <div className="comments__form--control">
        <div className="comments__section--avatar">
          <a href="/">
            <img src="/assets/images/avatar1.jpg" alt="" />
          </a>
        </div>
        <textarea value={commment} onChange={handleOnchangeComment} />
      </div>
      <div className="text-right">
        {currentUser ? (
          <button className="btn btn-default" onClick={handlePostComment}>
            Submit
          </button>
        ) : (
          <button className="btn btn-default" onClick={handleLogin}>
            Đăng nhập
          </button>
        )}
      </div>
    </div>
  );
}

export default PostDetailCommemtForm;
