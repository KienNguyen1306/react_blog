import API from "./api";

const searchService = {
  getAll: (inputParams = {}) => {
    return API.get(`/wp/v2/posts`, {
      params: {
        lang: "vi",
        ...inputParams,
      },
    });
  },
  getSearchPost: function (valueSearch, page = 1) {
    return this.getAll({ per_page: 3, page: page, search: valueSearch });
  },
};

export default searchService;
