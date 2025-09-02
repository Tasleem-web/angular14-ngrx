import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_FAIL = '[auth page] login fail';
export const LOGOUT = '[auth page] logout';

export const REGISTER_START = '[auth page] register start';
export const REGISTER_SUCCESS = '[auth page] register success';
export const REGISTER_FAIL = '[auth page] register fail';

// login

export const loginStart = createAction(LOGIN_START, props<{ email: string, password: string }>());

export const loginSuccess = createAction(LOGIN_SUCCESS, props<{ user: User }>());

export const logOut = createAction(LOGOUT);

// Register
export const registerStart = createAction(REGISTER_START, props<{ email: string, password: string }>());
export const registerSuccess = createAction(REGISTER_SUCCESS, props<{ user: User }>());
