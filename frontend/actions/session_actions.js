export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

import * as SessionAPIUtil from '../util/session_api_util'

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = user => dispatch => {
  return SessionAPIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ));
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()));
};

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ));
};