import axios from "axios";

const API = {
  call: function () {
    return axios.create({
      baseURL: "http://wp-api.test/wp-json",
    });
  },
  callWithToken: function () {
    return axios.create({
      baseURL: "http://wp-api.test/wp-json",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
      },
    });
  },
};

export default API;
