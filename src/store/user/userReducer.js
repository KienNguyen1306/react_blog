import { ACT_LOGIN, ACT_LOGOUT, ACT_UPLOAD_USER } from "./action";

const initState = {
  token: localStorage.getItem("ACCESS_TOKEN"),
  currentUser: null,
};

function userReducer(state = initState, action) {
  switch (action.type) {
    case ACT_LOGIN:
      localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        currentUser: action.payload.currentUser,
      };
    case ACT_LOGOUT:
      localStorage.removeItem("ACCESS_TOKEN");
      return { ...state, token: null, currentUser: null };
    case ACT_UPLOAD_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
}

export default userReducer;
