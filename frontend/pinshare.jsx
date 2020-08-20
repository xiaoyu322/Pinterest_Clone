import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// testing
    // import { signUp, logIn, logOut } from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
    // const root = document.getElementById("root");

    // // testing
    // window.signUp = signUp;
    // window.logIn = logIn;
    // window.logOut = logOut;
    

    // ReactDOM.render(<h1>Welcome to Pinshare</h1>, root);
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});