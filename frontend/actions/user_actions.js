import * as UserApiUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';


export const receiveUser = (currentUser) => ({
    type: RECEIVE_USER,
    currentUser
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

// export const fetchUser = (userId) => dispatch => {
//     return UserApiUtil.fetchUser(userId).then(
//         (user) => dispatch(receiveUser(user))
//     );
// };
