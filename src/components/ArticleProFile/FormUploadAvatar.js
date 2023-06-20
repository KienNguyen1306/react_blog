import { useEffect, useState } from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";
import { useDispatch, useSelector } from "react-redux";
import { actFetchChangeImageAsync } from "../../store/user/action";

function FormUploadAvatar() {
  const dispatch = useDispatch();
  const avatarUser = useSelector((state) => state.USER.currentUser?.userAvatar);
  const oldMedia = useSelector((state) => state.USER.currentUser?.media_id);

  const [previewImage, setPreviewImage] = useState(null);
  const [imageform, setImageForm] = useState(null);
  const [des, setDes] = useState("");
  const [messageError, setMessageError] = useState("");
  const [messageSusscess, setMessageSusscess] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setImageForm(e.target.files[0]);
    }
    setMessageError("");
    setMessageSusscess("");
  };

  const handleChangeDes = (e) => {
    setDes(e.target.value);
    setMessageError("");
    setMessageSusscess("");
  };

  useEffect(() => {
    setPreviewImage(avatarUser);
  }, [avatarUser]);

  function handleUploadImage(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", imageform);
    dispatch(actFetchChangeImageAsync(formData, des, oldMedia)).then((res) => {
      if (res.ok) {
        setMessageSusscess(res.message);
      } else {
        setMessageError(res.message);
      }
      setDes("");
      setImageForm(null);
    });
  }

  return (
    <form autoComplete="off" onSubmit={handleUploadImage}>
      <div className="message">
        <span className="error_change">{messageError}</span>
        <span className="susscess_change">{messageSusscess}</span>
      </div>
      <Input
        name="description"
        label="Description"
        placeholder="Nhập description..."
        autoComplete="off"
        value={des}
        onChange={handleChangeDes}
      />

      <div className="change_image">
        <input type="file" onChange={handleFileChange} accept="image/*" />
        {previewImage && (
          <img className="privewImage" src={previewImage} alt="Preview" />
        )}
      </div>
      <div className="d-flex tcl-jc-between tcl-ais-center">
        <Button type="primary" size="large">
          SAVE
        </Button>
      </div>
    </form>
  );
}

export default FormUploadAvatar;
