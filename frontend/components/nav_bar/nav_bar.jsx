import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ({ currentUser }) => {
    return (
      <header className="header">
        <div className="logo_and_text">
          <img className="logo" src={window.logo} />
          <h1 className="logo-text">Pinshare</h1>
        </div>
        <div className="btns">
          <button className='other-nav'>About</button>
          <button className='other-nav'>Business</button>
          <button className='other-nav'>Blog</button>
          <Link className="signup-btn" to="/signup">Sign up</Link>
          <Link className="login-btn" to="/login">Log in</Link>
        </div>
      </header>
    )
};

export default navBar;