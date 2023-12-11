import React from "react";
import { getAuth, EmailAuthProvider, GoogleAuthProvider} from 'firebase/auth';
import { StyledFirebaseAuth } from "react-firebaseui";
import { useNavigate } from "react-router-dom";

export default function SignInPage(props) {

    const auth = getAuth();

    const navigate = useNavigate();

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
            signInSuccessWithAuthResult: () => {
                navigate("/"); 
                return false; 
              }
        },
        credentialHelper: 'none'
    }

    return (
        <StyledFirebaseAuth firebaseAuth={auth} uiConfig={configObj} />
    )
}