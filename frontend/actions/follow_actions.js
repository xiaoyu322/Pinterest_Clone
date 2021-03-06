import * as FollowsApiUtil from "../util/follow_api_util";

export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveFollows = follows => ({
    type: RECEIVE_FOLLOWS,
    follows
})

const receiveFollow = follow => {
    return {
        type: RECEIVE_FOLLOW,
        follow
    }
}

// const removeFollow = followId => {
//     return {
//         type: REMOVE_FOLLOW,
//         followId
//     }
// }

export const fetchAllFollows = () => dispatch => 
    FollowsApiUtil.fetchAllFollows().then(follows => dispatch(receiveFollows(follows)));

// export const fetchFollow = (followId) => dispatch => 
//     FollowAPIUtil.fetchFollow(followId).then(follow => dispatch(receiveFollow(follow)));

export const createFollow = follow => dispatch =>
    FollowsApiUtil.createFollow(follow).then(follow => dispatch(receiveFollow(follow)));

export const deleteFollow = followId => dispatch => 
    FollowsApiUtil.deleteFollow(followId)
    .then(follow => dispatch(receiveFollows(follow)));