import * as constant from "../constant";

const INITIAL_STATE = {
  product: [],
};

export const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constant.GET_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};
