import { connect } from "react-redux";
import React from "react";
import { fetchAllPins, fetchPin } from "../../actions/pin_actions";
import PinIndexContainer from './pin_index_container'
import { Link } from "react-router-dom";


class PinShow extends React.Component {
    constructor(props) {
        super(props);
        // const { pins, currentUserId, currentPin, users } = this.props;
        // const allPins = Object.values(pins);
        
        // this.goBack = this.goBack.bind(this);
    }

    // goBack(e) {
    //     e.stopPropagation();
    //     this.props.history.goBack();
    // }

    // componentDidMount() {
    //     this.props.fetchPin(this.props.currentPin);
    //     this.props.fetchUsers();
    // }

    onDelete(pin) {
        $.ajax({
            method: 'DELETE',
            url: `/api/pins/${pin.id}`,
          }).then(document.location.href = `#`);
    }

    img() {
        const { currentPin, users } = this.props;

        if (currentPin) {
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
                        <div className="owner-pin-links"> Share from user: 
                            <Link className="pin-show-link" to={`/users/${owner.id}/pins`}>
                                {owner.email}
                            </Link>
                        </div>
                        <button className="submit-pin" onClick={() => this.onDelete(currentPin)}>Delete!</button>
                    </div>
                </div>
            );
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