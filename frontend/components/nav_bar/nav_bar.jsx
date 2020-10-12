import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
  if (!currentUser) {
    return (
      <header className="header">
        <div className="logo_and_text">
          <Link to="/">
            <img className="logo" src={window.logo} />
          </Link>
          <h1 className="logo-text">Pinshare</h1>
        </div>
        <div className="btns">
          <a className='other-nav' href="https://www.linkedin.com/in/xiao-yu-0a18449b/" target="_blank">Linkedin</a>
          <a className='other-nav' href="https://github.com/xiaoyu322" target="_blank">Github</a>
          <Link className="login-btn" to="/login">Log in</Link>
          <Link className="signup-btn" to="/signup">Sign up</Link>
        </div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <div className="logo_and_text">
          <Link to="/">
          <img className="logo" src={window.logo} />
          </Link>
          <h1 className="logo-text">Pinshare</h1>
        </div>
        <div className="btns">
          <a className='other-nav' href="https://www.linkedin.com/in/xiao-yu-0a18449b/" target="_blank">Linkedin</a>
          <a className='other-nav' href="https://github.com/xiaoyu322" target="_blank">Github</a>
          <Link className='profile-btn' to={`/users/${currentUser.id}/pins`} >My Profile</Link>
          <Link className="logout-btn" to="/" onClick={logout}>
              Log out
          </Link>
        </div>
      </header>
    );
  };
};

export default NavBar;