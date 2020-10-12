import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidMount() {
    this.props.clearSessionErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demoUser(e) {
    e.preventDefault();
    const user = {
      email: "ian@gmail.com",
      password: "123456"
    }
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <ul className='error-message' key={`error-${i}`}>
            {error}
          </ul>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-main">
        <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <p className='welcome'>Welcome to Pinshare</p>
            <p className='slogon'>Find new ideas to try</p>
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          <div className='error-messages'>
              {this.renderErrors()}
          </div>
          <div className="login-form">
            <br/>
            <label>
              <input type="text" placeholder='Email'
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br/>
            <label>
              <input type="password" placeholder='Password'
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
              <button className="demo-login" onClick={this.demoUser}>Demo Login</button>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default SessionForm;
