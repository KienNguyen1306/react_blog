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
  getSearchPost: function (valueSearch) {
    return this.getAll({ per_page: 3, page: 1, search: valueSearch });
  },
};

export default searchService;
