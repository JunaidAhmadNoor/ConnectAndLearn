import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LandingPage from './pages/landingpage';
import Signin from './pages/signin';
import Signup from './pages/signup';
import UserContextProvider from '../context/userContext';
import GroupStudy from './pages/GroupStudy/groupStudy';
import SkillExchange from './pages/SkillExchange/SkillExchange';
import Protected from './components/protected';
import Details from './pages/GroupStudy/Details';
import AddGroup from './pages/GroupStudy/addGroup';
import Notifications from './pages/GroupStudy/Notifications';
import PaidProjects from './pages/Paidprojects';
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
                        <Route path="/groupStudy" element={<Protected elementBody={<GroupStudy/>}/>} />
                        <Route path="/SkillExchange" element={<Protected elementBody={<SkillExchange/>}/>} />
                        <Route path="/Details/:spaceId" element={<Protected elementBody={<Details/>}/>} />
                        <Route path="/addGroup/:spaceId" element={<AddGroup />} />
                        <Route path="/Notifications" element={<Notifications/>} />
                        <Route path="/paidprojects" element={<PaidProjects/>}/>

                        
                
                    </Routes>
                

            </UserContextProvider>
        </>
    );
};

export default App;
