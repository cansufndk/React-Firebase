import * as constants from "../constant";

export const productActions = () => async (dispatch) => {
  //apiden ürünleri çekmek için
  const response = await fetch("https://fakestoreapi.com/products").then((res) => res.json());

  dispatch({ type: constants.GET_PRODUCTS, payload: response });
};

export const createUser = () => () => {};
