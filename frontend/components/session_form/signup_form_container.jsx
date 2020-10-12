import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign Up',
    navLink: <Link to="/login">log in please</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
