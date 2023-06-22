import "./login.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actLoginAsync } from "../../store/user/action";
import { getQueryStr } from "../../helpers";

function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  console.log(history.location);

  const location = useLocation();
  // const nextPage = getQueryStr("next", location.search);
  const nextPage = history.location.state?.from;

  console.log("nextPage", nextPage);

  const token = useSelector((state) => state.USER.token);

  if (token) {
    history.push("/");
  }
  const [dataForm, setDataForm] = useState({
    username: "admin",
    password: "123123",
  });
  const [message, setMessage] = useState("");

  // handleOnchange
  function handleOnchange(e) {
    let { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  }

  // login
  function handleLogin(e) {
    e.preventDefault();
    dispatch(actLoginAsync(dataForm)).then((res) => {
      if (res.ok) {
        if (nextPage) {
          history.push(nextPage);
        } else {
          history.push("/");
        }
      } else {
        setMessage(res.message);
      }
    });
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng nhập</h1>
            <div className="form-login-register">
              <p className="error-message">{message}</p>
              <form autoComplete="off" onSubmit={handleLogin}>
                <Input
                  name="username"
                  label="Tên đăng nhập"
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                  onChange={handleOnchange}
                  value={dataForm.username}
                />
                <Input
                  name="password"
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                  onChange={handleOnchange}
                  value={dataForm.password}
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large">
                    Đăng nhập
                  </Button>
                  <Link to="/register">Đăng ký</Link>
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

export default LoginPage;
