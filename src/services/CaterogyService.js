import API from "./api";

const CaterogyService = {
  getAll: function (inputParams = {}) {
    return API.get(`/wp/v2/categories?per_page=100&page=1&lang=vi`, {
      params: {
        ...inputParams,
      },
    });
  },
};

export default CaterogyService;
