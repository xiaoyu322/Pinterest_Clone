// const { $CombinedState } = require("redux")

export const signUp = (userArg) => {
    return $.ajax({
        method: 'POST',
        url: 'api/users',
        data: {user: userArg}
    })
}


export const logIn = (userArg) => {
    return $.ajax({
        method: 'POST',
        url: 'api/session',
        data: {user: userArg}
    })
}

export const logOut = () => {
    return $.ajax({
        method: 'DELETE',
        url: 'api/session'
    })
}