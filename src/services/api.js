import axios from "axios";

const API = {
  call: function () {
    return axios.create({
      baseURL: "https://bthxuan.azdigi.shop/wp-json",
    });
  },
  callWithToken: function () {
    return axios.create({
      baseURL: "https://bthxuan.azdigi.shop/wp-json",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
      },
    });
  },
};

export default API;
