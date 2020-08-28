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
          <button className='other-nav'>About</button>
          <button className='other-nav'>Business</button>
          <button className='other-nav'>Blog</button>
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
          <button className='other-nav'>About</button>
          <button className='other-nav'>Business</button>
          <button className='other-nav'>Blog</button>
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