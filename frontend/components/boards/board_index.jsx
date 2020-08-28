import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BoardIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            boardForm: false,
            user_id: this.props.currentUserId
        }
    }

    componentDidMount(){
        this.props.fetchBoards();
    }

    render(){
        const {boards} = this.props
        const allBoards = Object.values(boards).filter(board => board.user_id == this.props.currentUserId)
        if (allBoards.length !== 0) {
            return (
                <div className="board-index-box">
                    <p className='my-boards-text'>My Boards</p>
                    <div className='create-board-box'>
                        <Link className="create-board-btn" to={`/board/new`}>
                            Create Board
                            <FontAwesomeIcon className="profile-link-icons" icon={faPlus}/>
                        </Link>
                    </div>
                    <div className='boards-box'>
                        {allBoards.map((board, idx) => {
                            return <NavLink key={idx} className="board-index-item" to={`/users/${this.props.currentUserId}/boards/${board.id}`}>
                                <p className="board-index-item-text">{board.title}</p>
                                <img src={window.board_photo} className='board_photo'/>
                                </NavLink>
                        })}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="board-index-box">
                <p className='my-boards-text'>My Boards</p>
                <div className='create-board-box'>
                    <Link className="create-board-btn" to={`/board/new`}>
                        Create Board
                            <FontAwesomeIcon className="profile-link-icons" icon={faPlus} />
                    </Link>
                </div>
                <div className="no-pins-container">
                    <p>You haven't saved any Boards yet</p>
                </div>
                </div>
            )
        }

    }
}

export default withRouter(BoardIndex);