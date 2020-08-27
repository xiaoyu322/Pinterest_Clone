export const fetchBoards = (userId) => {
    return $.ajax({
        url: `/api/users/${userId}/boards`,
        method: "GET"
    })
}

export const fetchBoard = (userId, boardId) => {
    return $.ajax({
        url: `/api/users/${userId}/boards/${boardId}`,
        method: "GET"
    })
}

export const createBoard = (board) => {
    return $.ajax({
        url: `/api/users/${board.user_id}/boards`,
        method: "POST",
        data: {board}
    })
}


export const deleteBoard = (userId, boardId) => {
    return $.ajax({
        url: `/api/users/${userId}/boards/${boardId}`,
        method: "DELETE"
    })
}

export const fetchPinBoards = () => {
    return $.ajax({
        url: "/api/pin_boards",
        method: "GET"
    })
}