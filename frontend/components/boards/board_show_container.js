import {connect} from 'react-redux';
import { fetchBoard, fetchPinBoards, fetchBoards, deleteBoard } from '../../actions/board_actions';
import { fetchAllPins} from '../../actions/pin_actions';
import BoardShow from './board_show';
import { selectPinBoards } from '../../reducers/selectors';

const mapStateToProps = ({entities: {boards, pinBoards, pins}, session:{id}, errors}, {match: {params}}) => {
    // console.log(pinBoards)
    // console.log(pins)
    return {
        boardId: params.boardId,
        currentUserId: id,
        board: boards[params.boardId],
        pinsOnBoard: selectPinBoards(pinBoards, pins, params.boardId),
        errors
    }
}

const mapDispatchToProps = (dispatch, {match: {params}}) => ({
    fetchBoards: () =>  dispatch(fetchBoards()),
    fetchBoard: () => dispatch(fetchBoard(params.userId, params.boardId)),
    fetchAllPins: () => dispatch(fetchAllPins()),
    fetchPinBoards: () => dispatch(fetchPinBoards()),
    deleteBoard: (userId, boardId) => dispatch(deleteBoard(userId, boardId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);