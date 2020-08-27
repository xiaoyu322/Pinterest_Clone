import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import NavBar from './nav_bar/nav_bar_container'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import PinCreateContainer from './pins/pin_create_form_container'
import PinIndexContainer from './pins/pin_index_container';
import PinShowContainer from './pins/pin_show_container'
import PinCreateContainer from './pins/pin_create_container'
import ProfileContainer from './profile/profile_container'
import BoardShowContainer from './boards/board_show_container';

// Just functional
const App = () => {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <Switch>
                <Route exact path="/" component={PinIndexContainer} /> 
                <AuthRoute exact path="/login" component={LogInFormContainer} />
                <AuthRoute exact path="/signup" component={SignUpFormContainer} />
                <Route exact path="/pins/:pinId" component={PinShowContainer} />
                <ProtectedRoute exact path="/users/:userId/pins" component={ProfileContainer}/>
                <ProtectedRoute exact path="/users/:userId/boards" component={BoardShowContainer} />
                <ProtectedRoute exact path="/pin/new" component={PinCreateContainer} />
            </Switch>
        </div>
    )
}
export default App;