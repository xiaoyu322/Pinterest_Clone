import { connect } from 'react-redux';
import CreateBoard from './board_create';
import { createBoard } from '../../actions/board_actions';

const msp = (statge) => {
    return {
        currentUserId: statge.session.id
    }
}

const mdp = dispatch => ({
    createBoard: board => dispatch(createBoard(board))
})

export default connect(msp, mdp)(CreateBoard)