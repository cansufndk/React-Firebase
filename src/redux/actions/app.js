import * as constants from "../constant";
import { createUserFirebase, loginUserFirebase } from "../../firebase/auth";

export const productActions = () => async (dispatch) => {
  //apiden ürünleri çekmek için
  const response = await fetch("https://fakestoreapi.com/products").then((res) => res.json());

  dispatch({ type: constants.GET_PRODUCTS, payload: response });
};

export const profileToggle = (payload) => ({
  type: constants.PROFILE_TOGGLE,
  payload,
});

export const userStatus = (key, value) => ({
  type: constants.USER_STATUS,
  key,
  value,
});

export const createUserAction = (email, password) => async (dispatch, getState) => {
  const user = await createUserFirebase(email, password);

  dispatch({ type: constants.CREATE_USER, payload: user });
  // console.log("create actions", user);
};

export const loginUserAction = (email, password) => async (dispatch, getState) => {
  const user = await loginUserFirebase(email, password);

  dispatch({ type: constants.LOGIN_USER, payload: user });
  localStorage.setItem("user", JSON.stringify(user));
  // console.log("giriş yaptı", user);
};
