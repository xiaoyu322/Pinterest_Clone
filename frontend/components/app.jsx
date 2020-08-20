import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import NavBar from './nav_bar/nav_bar_container'
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


// Just functional
const App = () => {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <Switch>
                <AuthRoute exact path="/login" component={LogInFormContainer} />
                <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            </Switch>
        </div>
    )
}
export default App;