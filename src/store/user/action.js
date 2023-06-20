import { mappingUser } from "../../helpers";
import userService from "../../services/userService";

export const ACT_LOGIN = "ACT_LOGIN";
export const ACT_REGISTER = "ACT_REGISTER";
export const ACT_LOGOUT = "ACT_LOGOUT";
export const ACT_UPLOAD_USER = "ACT_UPLOAD_USER";

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
      const currentUser = mappingUser(responseMe.data);
      dispatch(actLogin(token, currentUser));
    } catch (error) {
      dispatch(actLogout());
    }
  };
}

// change password
export function actFetchChangePasswordAsync(data) {
  return async (dispatch) => {
    try {
      const response = await userService.changePassword(data);
      console.log("ok", response);
      return { ok: true, message: "Cập nhập thành công" };
    } catch (error) {
      console.log("error", error);
      return { ok: false, ...error.response.data };
    }
  };
}

// upload curren user
export function actUploadUser(currentUser) {
  return {
    type: ACT_UPLOAD_USER,
    payload: currentUser,
  };
}

// change password
export function actFetchChangeImageAsync(formData, des = "", oldMedia) {
  return async (dispatch) => {
    try {
      let media = null;
      if (formData.get("file") !== "null") {
        const response = await userService.getMedia(formData);
        media = response.data.id;
      }

      const form = {
        description: des,
        simple_local_avatar: {
          media_id: media ? media : oldMedia,
        },
      };
      const resImage = await userService.changeImage(form);
      dispatch(actUploadUser(mappingUser(resImage.data)));
      return { ok: true, message: "Cập nhập thành công" };
    } catch (error) {
      return { ok: false, message: "cập nhập thất bại" };
    }
  };
}
