import userService from "../../services/userService";

export const ACT_LOGIN = "ACT_LOGIN";
export const ACT_REGISTER = "ACT_REGISTER";
export const ACT_LOGOUT = "ACT_LOGOUT";

// login
export function actLogin(token, currentUser) {
  return {
    type: ACT_LOGIN,
    payload: { token, currentUser },
  };
}

export function actLoginAsync(data) {
  return async (dispatch) => {
    try {
      const response = await userService.getLogin(data);

      dispatch(actFetchMeAsync(response.data.token));
      return { ok: true };
    } catch (error) {
      return { ok: false, message: "Thông tin đăng nhập không chính xác" };
    }
  };
}

// register
export function actRegister(token) {
  return {
    type: ACT_REGISTER,
    payload: { token },
  };
}

export function actRegisterAsync(data) {
  return async (dispatch) => {
    try {
      const response = await userService.userRegister(data);
      let dataUser = { username: data.username, password: data.password };
      dispatch(actLoginAsync(dataUser));
      return { ok: true };
    } catch (error) {
      console.log(error);
      return { ok: false, message: "Thông tin không hợp lệ" };
    }
  };
}

// log out
export function actLogout() {
  return {
    type: ACT_LOGOUT,
  };
}

export function actFetchMeAsync(token) {
  return async (dispatch) => {
    try {
      if (!token) {
        token = localStorage.getItem("ACCESS_TOKEN");
      } else {
        localStorage.setItem("ACCESS_TOKEN", token);
      }

      const responseMe = await userService.fetchMe();
      const currentUser = responseMe.data;

      dispatch(actLogin(token, currentUser));
    } catch (error) {
      dispatch(actLogout());
    }
  };
}
