import * as constant from "../constant";

const INITIAL_STATE = {
  product: [],
  profile: false,
  email: "",
  password: "",
  user: JSON.parse(localStorage.getItem("user")),
};

export const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constant.GET_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      };

    case constant.PROFILE_TOGGLE:
      return {
        profile: action.payload,
      };

    case constant.USER_STATUS:
      return {
        ...state,
        user: {
          ...state.user,
          [action.key]: action.value,
          [action.key]: action.value,
        },
      };

    case constant.CREATE_USER:
      return {
        ...state,
      };

    case constant.LOGIN_USER:
      return {
        ...state,
      };

    default:
      return state;
  }
};
