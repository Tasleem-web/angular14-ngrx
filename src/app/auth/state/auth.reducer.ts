import { createReducer, on } from "@ngrx/store";
import { initialAuthState } from "./auth.state";
import { loginSuccess, logOut } from "./auth.actions";

const _authReducer = createReducer(
  initialAuthState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user
    }
  }),
  on(logOut, state => {
    console.log('logout action inside reducer');
    return {
      ...state,
      user: null
    }
  })
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
