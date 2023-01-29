import * as constant from "../constant";

const INITIAL_STATE = {
  product: [],
  user: {
    email: "",
    password: "",
  },

  drawer: false,

  // user: JSON.stringify(localStorage.getItem("user")) || false,
};
export const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constant.GET_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      };

    /* case constant.USER_STATUS:
      return {
        ...state,
        user: {
          ...state.user,
          [action.key]: action.value,
          [action.key]: action.value,
        },
      };*/

    case constant.CREATE_USER:
      return {
        ...state,
        user: action.payload.user,
      };

    case constant.LOGIN_USER:
      return {
        ...state,
        user: action.payload.user,
      };

    case constant.LOGOUT_USER:
      return {
        user: {
          email: undefined,
          password: undefined,
        },
      };

    case constant.DRAWER:
      return {
        drawer: action.payload,
      };

    default:
      return state;
  }
};
