import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RESET_SESSION_ERRORS = 'RESET_SESSION_ERRORS';
export const NEW_USER = "NEW_USER";


export const receiveCurrentUser = (currentUser) => {
    return {
    type: RECEIVE_CURRENT_USER,
    currentUser
    };
};

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const resetErrors = () => ({
    type: RESET_SESSION_ERRORS,
});

export const newUserDetails = currentUser => ({
    type: NEW_USER,
    currentUser
})

export const login = user => dispatch => {
    return SessionAPIUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail(errors => (dispatch(receiveErrors(errors.responseJSON))))
};

export const logout = () => dispatch => (
    SessionAPIUtil.logout().then(user => (
        dispatch(logoutCurrentUser())
    ))
);

export const signup = user => dispatch => {
    return SessionAPIUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)))
            .fail(errors => (dispatch(receiveErrors(errors.responseJSON))))
};

export const createNewUser = user => dispatch => {
    return SessionAPIUtil.signup(user)
        .then((user) => dispatch(newUserDetails(user)),
            error => dispatch(receiveSessionErrors(error.responseJSON)))
}