import * as BoardAPIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";
export const RECEIVE_PIN_BOARDS = "RECEIVE_PIN_BOARDS";

export const receiveBoards = boards => ({
    type: RECEIVE_BOARDS,
    boards
})

export const receiveBoard = board => ({
    type: RECEIVE_BOARD,
    board
})

export const removeBoard = boardId => ({
    type: REMOVE_BOARD,
    boardId
})

export const receiveBoardErrors = errors => ({
    type: RECEIVE_BOARD_ERRORS,
    errors
})

export const receivePinBoards = pinBoards => ({
    type: RECEIVE_PIN_BOARDS,
    pinboards
})

export const fetchBoards = (userId) => dispatch => {
    return BoardAPIUtil.fetchBoards(userId)
        .then(boards => dispatch(receiveBoards(boards)),
            error => dispatch(receiveBoardErrors(error.responseJSON)))
}

export const fetchBoard = (userId, boardId) => dispatch => {
    return BoardAPIUtil.fetchBoard(userId, boardId)
        .then(board => dispatch(receiveBoard(board)),
            error => dispatch(receiveBoardErrors(error.responseJSON)))
}

export const createBoard = board => dispatch => {
    return BoardAPIUtil.createBoard(board)
        .then(board => dispatch(receiveBoard(board)),
            error => dispatch(receiveBoardErrors(error.responseJSON)))
}

export const updateBoard = board => dispatch => {
    return BoardAPIUtil.updateBoard(board)
        .then(board => dispatch(receiveBoard(board)),
            error => dispatch(receiveBoardErrors(error.responseJSON)))
}

export const deleteBoard = (userId, boardId) => dispatch => {
    return BoardAPIUtil.deleteBoard(userId, boardId)
        .then(boardId => dispatch(removeBoard(boardId)),
            error => dispatch(receiveBoardErrors(error.responseJSON)))
}

export const fetchPinBoards = () => dispatch => {
    return BoardAPIUtil.fetchPinBoards()
        .then(pinBoards => dispatch(receivePinBoards(pinBoards)),
            error => dispatch(receiveBoardErrors(error.responseJSON)))
}