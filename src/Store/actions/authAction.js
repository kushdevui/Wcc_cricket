import {
  logout,
  setUserToken,
} from "../../Controller/localStorageHandler";
import { routes } from "../../Controller/Routes";
import { history } from "../../Controller/history";
import { login } from "../../Controller/api/authServices";

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export function userLoginAction(data) {
  setUserToken(data.data);
  history.push(routes.dashboard.self);
  return{
        type: LOGIN_SUCCESS,
        payload: data,
  };
  //TODO uncomment below code and remove above one
  // return (dispatch) => {
  //   return login(data).then((response) => {
  //     setUserToken(response.data);
  //     dispatch({
  //       type: LOGIN_SUCCESS,
  //       payload: response,
  //     });
  //     history.push(routes.dashboard.self);
  //   });
  // };
}

export const userLogOutAction = () => {
  logout();
  history.push(routes.login);
  return { type: LOGOUT_SUCCESS };
};
