import React from "react";
import PinIndexContainer from './pin_index_container'
import { Link } from "react-router-dom";


class PinShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBoardId: "",
            boards: [],
            disable: false
        }
    }

    componentDidMount() {
        this.props.fetchBoards()
            .then((result)=> 
                this.setState({boards: Object.values(result.boards)
                    .filter(board=> board.user_id == this.props.currentUserId)}))
            .then(() => this.setState({selectedBoardId: this.state.boards[0].id}))
    }

    onDelete(pin) {
        $.ajax({
            method: 'DELETE',
            url: `/api/pins/${pin.id}`,
          }).then(document.location.href = `#`);
    }

    update() {
        return (e) => this.setState({selectedBoardId: e.target.value})
    }

    onSubmit() {
        console.log(this.state.selectedBoardId)
        if (this.state.selectedBoardId !== "") {
                const formData = new FormData();
                formData.append("pin_board[pin_id]", this.props.currentPinId);
                formData.append("pin_board[board_id]", this.state.selectedBoardId);
                $.ajax({
                    url: `/api/pin_boards`,
                    method: "POST",
                    data: formData,
                    contentType: false,
                    processData: false,
                  }).then(() => this.setState({disable: true}))
            
        }
    }

    img() {
        const { currentPin, users, currentUserId } = this.props;
        if (currentPin && (currentPin.user_id == currentUserId)) {
            const owner = users[currentPin.user_id]
            return (
                <div className="single-pin-show-inner-container">
                    <a name="top-of-page"></a>
                    <div>
                        <img className="pin-show-images" src={currentPin.photo_url} />
                    </div>
                    <div className="pin-show-text-container">
                        <div className="pin-show-header"></div>
                        <p className="pin-show-title"> {currentPin.title} </p>
                        <div className='dropdown-links'>
                            <select className='dropdown-parent' onChange={this.update.bind(this)()}>
                            {this.state.boards.map((board) => (
                                <option className='.dropdown-child' value={board.id} key={board.id}>
                                    {board.title}
                                </option>
                            ))}
                        </select>

                            {this.state.disable ? <p>added</p> : <button className='add-to-board-btn' onClick={this.onSubmit.bind(this)} >
                            Add to Board
                        </button>}

                        </div>
                        <div className="owner-pin-links"> Share from user:
                            <Link className="pin-show-link" to={`/users/${owner.id}/pins`}>
                                {owner.email}
                            </Link>
                        </div>
                        <button className="submit-pin" onClick={() => this.onDelete(currentPin)}>Delete!</button>
                    </div>
                </div>
            );
        } else if (currentPin) {
            const owner = users[currentPin.user_id]
            // const ownerEmail = owner.email
            return (
                <div className="single-pin-show-inner-container">
                    <a name="top-of-page"></a>
                    <div>
                        <img className="pin-show-images" src={currentPin.photo_url} />
                    </div>
                    <div className="pin-show-text-container">
                        <div className="pin-show-header"></div>
                            <p className="pin-show-title"> {currentPin.title} </p>
                        <div className="owner-pin-links"> 
                            <p className="share-by-user-text"> Share by user: </p>
                            <img className="share-by-user" src={window.profile_img_logo} />
                            <Link className="pin-show-link" to={`/users/${owner.id}/pins`}>
                                {owner.email}
                            </Link>
                        </div>
                    </div>
                </div>
            )
        } else {
            return "No photo found"
        };
    };

    render() {
        const { currentPin, users } = this.props;
        const owner = users[currentPin.user_id]

        return (
            <div className="outerrr">
                <div className="single-pin-show-container">
                    <div>{this.img()}</div>
                </div>
                <p className="single-pin-text"> Explore More Pins </p>
                <PinIndexContainer />
            </div>
        );
    }
} 


export default PinShow;