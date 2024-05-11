import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LandingPage from './pages/landingpage';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Groups from './pages/Groups';
import UserContextProvider from '../context/userContext';
import GroupStudy from './pages/GroupStudy';
import Protected from './components/protected';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

const App = () => {
    return (
        <>
            <UserContextProvider>
                <Toaster position='top-right' toastOptions={{ duration: 2000 }} />

                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    {/* <Route path="/groupStudy" element={<GroupStudy/>} /> */}
                    <Route path="/groupStudy" element={<Protected elementBody={<GroupStudy/>}/>} />
                    <Route path="/groups" element={<Protected elementBody={<Groups/>}/>} />
                </Routes>

            </UserContextProvider>
        </>
    );
};

export default App;
