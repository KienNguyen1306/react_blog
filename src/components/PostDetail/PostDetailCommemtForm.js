import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

function PostDetailCommemtForm() {
  const history = useHistory();
  const location = useLocation();
  let currentUser = useSelector((state) => state.USER.currentUser);

  function handleLogin() {
    history.push(`/login?next=${location.pathname}`);
  }

  function handlePostComment() {
    alert("chưa làm");
  }

  return (
    <div className="comments__form">
      <div className="comments__form--control">
        <div className="comments__section--avatar">
          <a href="/">
            <img src="/assets/images/avatar1.jpg" alt="" />
          </a>
        </div>
        <textarea />
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
