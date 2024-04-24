import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingpage';
import Signin from './components/signin';
import Signup from './components/signup';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" exact element={<LandingPage />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
