import {connect} from 'react-redux';
import { fetchBoards, deleteBoard } from '../../actions/board_actions';
import BoardIndex from './board_index';

const mapStateToProps = (state) => ({
    boards: state.entities.boards,
    currentUserId: state.session.id
})

const mapDispatchToProps = (dispatch, {match: {params}}) => ({
    fetchBoards: () => dispatch(fetchBoards(params.userId)),
    // clearErrors: () => dispatch(clearErrors()),
    // createBoard: board => dispatch(createBoard(board)),
    deleteBoard: (userId, boardId) => dispatch(deleteBoard(userId, boardId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);