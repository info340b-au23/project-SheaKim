import React from "react";

import AboutPage from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/Home';
import SymptomSearchEngine from './components/Resource Log';
import SickLog from './components/Sickness Log';
// import NewMedForm from './components/Med Tracker';
import { Route, Routes } from 'react-router-dom';

// export default function App(props) {
//     return (
//         <div>Hello App</div>
//     );
// }

// export default App;

function App() {

    return (
        <div>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
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