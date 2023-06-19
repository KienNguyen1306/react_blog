import API from "./api";

const postService = {
  getAll: (inputParams = {}) => {
    return API.call().get(`/wp/v2/posts`, {
      params: {
        lang: "vi",
        ...inputParams,
      },
    });
  },
  getLatest: function () {
    return this.getAll({ per_page: 3, page: 1 });
  },

  getPopular: function () {
    return this.getAll({ per_page: 3, page: 1, orderby: "post_views" });
  },

  getPaging: function ({ page = 1, inputParam = {} }) {
    return this.getAll({ per_page: 2, page: page, ...inputParam });
  },

  getPostDetail: function (slug) {
    return this.getAll({ slug: slug });
  },
  getRelatedPosts: function (author, exclude) {
    return this.getAll({
      per_page: 3,
      page: 1,
      author: author,
      exclude: exclude,
    });
  },

  getCaterogyID: function (slug) {
    return API.call().get(`/wp/v2/categories`, {
      params: {
        slug: slug,
        lang: "vi",
      },
    });
  },
  getPostCaterogy: function (caterogyId) {
    return this.getAll({ per_page: 3, page: 1, categories: caterogyId });
  },
};

export default postService;
