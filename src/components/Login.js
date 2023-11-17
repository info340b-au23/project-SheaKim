import React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default function LoginPage(props) {
    return (
        <div className='login'>
            <main className="main-login">
                    <div className="authenticate">
                        <h1>Click to sign in or sign up!</h1>
                        <StyledFirebaseAuth uiConfig={props.uiConfig} firebaseAuth={firebase.auth()} />
                    </div>
            </main>
        </div>
    )
}