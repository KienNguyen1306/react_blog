import FormChangePasswork from "./FormChangePasswork";
import "./ArticleProFile.css";
import FormUploadAvatar from "./FormUploadAvatar";
function ArticleProFile() {
  return (
    <div className="profile">
      <div className="body">
        <div className="left">
          <FormChangePasswork />
        </div>
        <div className="right">
          <FormUploadAvatar />
        </div>
      </div>
    </div>
  );
}

export default ArticleProFile;
