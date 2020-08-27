import {connect} from 'react-redux';
import { fetchBoard, fetchPinBoards } from '../../actions/board_actions';
import { fetchAllPins} from '../../actions/pin_actions';
import BoardShow from './board_show';
import { selectPinBoards } from '../../reducers/selectors';

const mapStateToProps = ({entities: {boards, pinBoards, pins}, errors}, {match: {params}}) => {
    // console.log(entities)
    return {
        board: boards[params.boardId],
        pins: selectPinBoards(pinBoards, pins, params.boardId),
        errors
    }
}

const mapDispatchToProps = (dispatch, {match: {params}}) => ({
    fetchBoard: () => dispatch(fetchBoard(params.userId, params.boardId)),
    fetchAllPins: () => dispatch(fetchAllPins()),
    fetchPinBoards: () => dispatch(fetchPinBoards())
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);