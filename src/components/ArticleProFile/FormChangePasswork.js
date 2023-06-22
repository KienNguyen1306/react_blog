import { useDispatch } from "react-redux";
import Button from "../shared/Button";
import Input from "../shared/Input";
import { actFetchChangePasswordAsync } from "../../store/user/action";
import { useState } from "react";

function FormChangePasswork() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    password: "",
    new_password: "",
    confirm_new_password: "",
  });
  const [messageError, setMessageError] = useState("");
  const [messageSusscess, setMessageSusscess] = useState("");

  const [loading, setLoaing] = useState(true);

  function handleOnchangeForm(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleUploadPassword(e) {
    e.preventDefault();
    setLoaing(false);
    dispatch(actFetchChangePasswordAsync(formData)).then((res) => {
      if (res.ok) {
        setMessageSusscess("Cập nhập thành công ❤");
      } else {
        setMessageError(res.message);
      }
      setLoaing(true);
    });
  }

  return (
    <>
      <form autoComplete="off" onSubmit={handleUploadPassword}>
        <div className="message">
          <span className="error_change">{messageError}</span>
          <span className="susscess_change">{messageSusscess}</span>
        </div>

        <Input
          name="password"
          label="Password cũ"
          placeholder="Nhập password cũ ..."
          autoComplete="off"
          onChange={handleOnchangeForm}
        />
        <Input
          name="new_password"
          type="password"
          label="Nhập mật khẩu mới"
          placeholder="Nhập mật khẩu mới ..."
          autoComplete="new-password"
          onChange={handleOnchangeForm}
        />
        <Input
          name="confirm_new_password"
          type="password"
          label="Nhập lại mật khẩu mới"
          placeholder="Nhập lại mật khẩu mới ..."
          autoComplete="new-password"
          onChange={handleOnchangeForm}
        />

        <div className="d-flex tcl-jc-between tcl-ais-center">
          <Button type="primary" size="large">
            {loading ? "Change password" : "Loading..."}
          </Button>
        </div>
      </form>
    </>
  );
}

export default FormChangePasswork;
