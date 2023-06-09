import API from "./api";

const userService = {
  getLogin: function (data) {
    return API.call().post(`/jwt-auth/v1/token`, data);
  },
  userRegister: function (data) {
    return API.call().post(`/wp/v2/users/register`, data);
  },

  fetchMe: function () {
    return API.callWithToken().get("/wp/v2/users/me");
  },
  changePassword: function (data) {
    return API.callWithToken().put("/wp/v2/users/password", data);
  },
  getMedia: function (data) {
    return API.callWithToken().post("/wp/v2/media", data);
  },
  changeImage: function (data) {
    return API.callWithToken().put("/wp/v2/users/me", data);
  },
};

export default userService;
