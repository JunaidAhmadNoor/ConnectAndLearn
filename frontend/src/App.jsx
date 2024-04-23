import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Signin from './components/signin';
import Signup from './components/signup';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
