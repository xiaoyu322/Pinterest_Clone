import React from 'react';
import PinIndexItem from '../pins/pin_index_item';

class BoardShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const { fetchAllPins, fetchPinBoards, fetchBoards} = this.props;
        fetchPinBoards();
        fetchAllPins();
        fetchBoards();
    }

    deleteBoard() {
        this.props.deleteBoard(this.props.currentUserId, this.props.boardId)
        .then(document.location.href=`#/users/${this.props.currentUserId}/boards`)
    }

    render(){
        const { board, pinsOnBoard, fetchBoard} = this.props;
        if (!board) return 0;
        return (
            <div className="board-show-box">
                <div className="board-info"> 
                    <p className="my-boards-text">My Board</p>
                    <h1>{board.title}</h1>
                    <button className="delete-board-btn" onClick={this.deleteBoard.bind(this)}>
                        Delete Board
                    </button>
                </div>
                <div>
                    {!pinsOnBoard[0] ? "" : 
                        pinsOnBoard.map((pin, idx) => (
                            <div className="board-show-pins" key={idx}> 
                                <PinIndexItem getInfo={fetchBoard} key={idx} pin={pin} />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default BoardShow;