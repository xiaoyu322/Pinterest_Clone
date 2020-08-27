import * as UserApiUtil from '../util/users_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";


export const receiveUser = (currentUser) => ({
    type: RECEIVE_USER,
    currentUser
});

export const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
})

export const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
})

export const fetchUser = (userId) => dispatch => {
    return UserApiUtil.fetchUser(userId)
    .then( (user) => dispatch(receiveUser(user)),
        error => dispatch(receiveUserErrors(error.responseJSON)))
};

export const fetchUsers = () => dispatch => {
    return UserApiUtil.fetchUsers()
        .then(users => dispatch(receiveAllUsers(users)),
            error => dispatch(receiveUserErrors(error.responseJSON)))
}