import "./LoginPage/login.css";
import { Link, useHistory } from "react-router-dom";
import Input from "../components/shared/Input";
import Button from "../components/shared/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actRegisterAsync } from "../store/user/action";

function RegisterPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [dataForm, setDataForm] = useState({
    email: "",
    username: "",
    nickname: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  function handleOnchange(e) {
    let { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  }

  function handleRegister(e) {
    e.preventDefault();
    setLoading(false);
    dispatch(actRegisterAsync(dataForm)).then((res) => {
      if (res.ok) {
        history.push("/");
      } else {
        setMessage(res.message);
      }
      setLoading(true);
    });
  }
  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng ký</h1>
            <div className="form-login-register">
              <p className="error-message">{message}</p>
              <form autoComplete="off" onSubmit={handleRegister}>
                <Input
                  label="Email"
                  placeholder="Nhập Email ..."
                  autoComplete="off"
                  name="email"
                  onChange={handleOnchange}
                />
                <Input
                  label="Tên đăng nhập"
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                  name="username"
                  onChange={handleOnchange}
                />
                <Input
                  label="Nickname"
                  placeholder="Nhập Nickname"
                  autoComplete="off"
                  name="nickname"
                  onChange={handleOnchange}
                />
                <Input
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                  name="password"
                  onChange={handleOnchange}
                />
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  {loading ? (
                    <Button type="primary" size="large">
                      Đăng ký
                    </Button>
                  ) : (
                    <Button type="primary" size="large" loading>
                      loading
                    </Button>
                  )}
                  <Link to="/login">Bạn đã có tài khoản?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>
  );
}

export default RegisterPage;
