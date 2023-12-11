import React from "react";

import AboutPage from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/Home';
import SymptomSearchEngine from './components/Resource Log';
import SickLog from './components/Sickness Log';
import MedTracker from './components/Med Tracker';
import SignInPage from "./components/SignInPage";
import { Route, Routes } from 'react-router-dom';

function App() {


    return (
        <div>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signin" element={<SignInPage />} />
                    <Route path="/medtracker" element={<MedTracker />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/search" element={<SymptomSearchEngine />} />
                    <Route path="/sicklog" element={<SickLog />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App;