import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from './actionTypes';

export const loginSuccess = (user) => ({
    type: USER_LOGIN_SUCCESS,
    user: user,
});

export const loginFailure = (errorMessage) => ({
    type: USER_LOGIN_FAILURE,
    payload: errorMessage,
});