import * as constants from "../constant";
import { createUserFirebase, getUserInfo, loginUserFirebase } from "../../firebase/auth";

export const productActions = () => async (dispatch) => {
  //apiden ürünleri çekmek için
  const response = await fetch("https://fakestoreapi.com/products").then((res) => res.json());
  dispatch({ type: constants.GET_PRODUCTS, payload: response });
};

/*export const userStatus = (key, value) => ({
  type: constants.USER_STATUS,
  key,
  value,
});*/

export const createUserAction = (email, password) => async (dispatch) => {
  //*Create User Firebase
  try {
    const { userCr } = await createUserFirebase(email, password);
    const user = getUserInfo(userCr);
    dispatch({ type: constants.CREATE_USER, payload: { user } });
    console.log("üyelik oldu", user);
  } catch (error) {
    console.log("üye olmadı", error);
  }
};

export const loginUserAction = (email, password) => async (dispatch, getState) => {
  //*Giriş yapmak için
  try {
    const { userLg } = await loginUserFirebase(email, password);
    const user = getUserInfo(userLg);
    dispatch({ type: constants.LOGIN_USER, payload: { user } });

    /*const {
      user: { user },
    } = getState();
    localStorage.setItem("user", JSON.stringify(user));*/
    console.log("giriş yaptı", user);
  } catch (error) {
    console.log("giriş olmadı", error);
  }
};

export const logoutUserFirebase = (user) => async (dispatch, getState) => {
  //*Çıkış yapmak için
  try {
    const logout = await logoutUserFirebase(user);
    dispatch({ type: constants.LOGOUT_USER, payload: logout });
    /*const {
      user: { user },
    } = getState();
    localStorage.removeItem(user);*/
    console.log("çıkış oldu", logout);
  } catch (error) {
    console.log("çıkış olmadı", error);
  }
};

//! PRODUCTS

export const cardActions = (payload) => ({
  type: constants.DRAWER,
  payload,
});
