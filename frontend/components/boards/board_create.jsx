import React from 'react';

class CreateBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state={title: ""}
    }

    componentDidMount() {
        this.props.fetchBoards();
    }

    handleSubmit(e) {
        e.preventDefault();
        const { currentUserId } = this.props;
        const formData = new FormData();
        formData.append("board[title]", this.state.title)
        formData.append("board[user_id]", currentUserId);
        if (this.state.title != "") {
            $.ajax({
                url: `/api/users/${currentUserId}/boards`,
                method: "POST",
                data: formData,
                contentType: false,
                processData: false,
            }).then(this.props.fetchBoards()).then(document.location.href=`#/users/${currentUserId}/boards`)
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                <div className="create-pin-form">
                    <div>
                        <form 
                            className="pin-form-container" 
                            onSubmit={this.handleSubmit.bind(this)}>
                                <div className="pin-form">
                                    <h1>Create a Board!</h1>
                                    <label className ="pin-details">
                                        Title
                                    </label>
                                    <input type="text" id ="post-body" value = {this.state.title} onChange={this.update("title")}/>
                                    <button className="submit-pin">Create a board!</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateBoard;