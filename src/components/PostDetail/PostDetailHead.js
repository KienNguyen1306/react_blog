import { formatDate } from "../../helpers";

function PostDetailHead({ data }) {
  return (
    <div className="post-detail__head">
      <div className="tcl-container">
        <h1 className="post-detail__title">{data.title}</h1>
        <ul className="post-detail__info">
          <li className="item author">
            By
            <a href="/">
              <strong>{data.user.nickname}</strong>
            </a>
          </li>
          <li className="item date">{formatDate(data.date)}</li>
          <li className="item views">
            {data.view} <i className="icons ion-ios-eye" />
          </li>
          <li className="item comments">
            {data.commentCount} <i className="icons ion-ios-chatbubble" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PostDetailHead;
