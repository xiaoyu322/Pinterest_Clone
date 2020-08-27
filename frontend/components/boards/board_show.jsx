import React from 'react';
import PinIndexItem from '../pins/pin_index_item';

class BoardShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const { fetchAllPins, fetchBoard, fetchPinBoards} = this.props;
        fetchPinBoards();
        fetchAllPins();
        fetchBoard();
    }

    render(){
        const {board, pins, fetchBoard} = this.props;
        if (!board) return null;
        return (
            <div className="board-show-box">
                <div className="board-info">
                    <h1>{board.title}</h1>
                </div>
                <div className="board-show-pins">
                    { !pins[0] ? "" : 
                        pins.map((pin, idx) => (
                                <div key={idx} className="pins">
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