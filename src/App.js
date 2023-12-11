import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import AboutPage from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/Home';
import SymptomSearchEngine from './components/Resource Log';
import SickLog from './components/Sickness Log';
import MedTracker from './components/Med Tracker';
import SignInPage from "./components/SignInPage";
import { Route, Routes } from 'react-router-dom';
import { useState } from "react";

function App(props) {
    const [currentUser, setCurrentUser] = useState(null)
    const auth = getAuth();

    onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) { //firebaseUser defined: is logged in
            console.log('logged in', firebaseUser.displayName);
            //do something with firebaseUser (e.g. assign to a state variable)
        }
        else { //firebaseUser is undefined: is not logged in
            console.log('logged out');
        }
    });

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage currentUser={currentUser} />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/medtracker" element={<MedTracker />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/search" element={<SymptomSearchEngine />} />
                <Route path="/sicklog" element={<SickLog />} />
            </Routes>
            <Footer />
        </div>


    )
}

export default App;