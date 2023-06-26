import axios from "axios";

const API = {
  call: function () {
    return axios.create({
      baseURL: "https://bthxuan.azdigi.shop/",
    });
  },
  callWithToken: function () {
    return axios.create({
      baseURL: "https://bthxuan.azdigi.shop/",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
      },
    });
  },
};

export default API;
