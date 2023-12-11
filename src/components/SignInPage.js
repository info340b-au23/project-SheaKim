import React from "react";
import { getAuth, EmailAuthProvider, GoogleAuthProvider} from 'firebase/auth';
import { StyledFirebaseAuth } from "react-firebaseui";

export default function SignInPage(props) {
    // const currentUser = props.currentUser;
    // const loginFunction = props.loginCallback;

    const auth = getAuth();

    const configObj = {
        signInOptions: [
            {
             provider: EmailAuthProvider.PROVIDER_ID,
             requireDisplayName: true,
            },
            {
             provider: GoogleAuthProvider.PROVIDER_ID
            }
        ],
        signInFlow: 'popup',
        callbacks: {
            signInSuccessWithAuthResult: () => false
        },
        credentialHelper: 'none'
    }

    return (
            <div className="container">
                <StyledFirebaseAuth firebaseAuth={auth} uiConfig={configObj} />
            </div>
    )
}