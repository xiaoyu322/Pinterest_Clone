
export const selectPinBoards = (pinBoards, pins, boardId) => {
    if (Object.values(pinBoards).length === 0) return [1];
    let pinIds = [];
    let pinsOnBoard = [];
    Object.values(pinBoards).forEach( pb => {
        if (pb.board_id == boardId) 
           { pinIds.push(pb.pin_id)}
        })
    for(let i = 0; i < pinIds.length; i++){
        pinsOnBoard.push(pins[pinIds[i]]);
    }
    return pinsOnBoard;
}