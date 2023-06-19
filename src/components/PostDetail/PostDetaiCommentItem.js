import { useSelector } from "react-redux";
import PostDetailCommentAction from "./PostDetailCommentAction";
import { formatDate2Time } from "../../helpers";
import PostDetailCommemtForm from "./PostDetailCommemtForm";
import { useState } from "react";

function PostDetaiCommentItem({ data }) {
  const [showForm, setShowForm] = useState(false);
  const dataChildComment = useSelector(
    (state) => state.COMMENT.dataChildComment
  );

  if (!data) return <></>;
  const dataChildCommentId = dataChildComment[data.id];
  const { list, currentPage, totalItem } = dataChildCommentId || {
    list: [],
    currentPage: 0,
    totalItem: data.replyCommentCount,
  };

  let restTotal = totalItem - list.length;

  function handleShowForm() {
    setShowForm(!showForm);
  }

  return (
    <>
      <li className="item">
        <div className="comments__section">
          <div className="comments__section--avatar">
            <a href="/">
              <img src={data.userAvatar} alt="" />
            </a>
          </div>
          <div className="comments__section--content">
            <a href="/" className="comments__section--user">
              {data.userName}
            </a>
            <p className="comments__section--time">
              {formatDate2Time(data.time)}
            </p>
            <p
              className="comments__section--text"
              dangerouslySetInnerHTML={{ __html: data.comment }}
            ></p>
            <i
              className="ion-reply comments__section--reply"
              onClick={handleShowForm}
            ></i>
          </div>
        </div>
        {list.length > 0 && (
          <ul className="comments">
            {list.map((item) => {
              return <PostDetaiCommentItem key={item.id} data={item} />;
            })}
          </ul>
        )}

        {/* xêm thêm câu trả lời */}
        {restTotal > 0 && (
          <PostDetailCommentAction
            restTotal={restTotal}
            parent={data.id}
            currentPage={currentPage}
          />
        )}

        {showForm && <PostDetailCommemtForm />}
      </li>
    </>
  );
}

export default PostDetaiCommentItem;
