import { React, useEffect, useState ,useRef } from 'react';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Protected = ({ elementBody: Component }) => {
    const [userData, setUserData] = useState(null);
    const Navigate = useNavigate();
    const isLoggedIn = Cookies.get("token")
    console.log("I hit here");
    const navLinkRef = useRef(null);
    useEffect(() => {
        if (!isLoggedIn || (userData && userData.role !== "Student")) {
            // Simulate button click on NavLink
            navLinkRef.current?.click();
        }
    }, [isLoggedIn, userData]);

    useEffect(() => {
        if (!userData && userData?.role) {
            Navigate("/signin");
        }
    }, [userData])

    useEffect(() => {
        const getUserData = async () => {
            let token = isLoggedIn;
            //get user data here
            if (token) {
                let response = await axios.post('/getUserData', { token });
                setUserData(response.data);
            }
        }
        getUserData();
    }, []);

    return (<>
        {
            isLoggedIn && userData?.role == "Student" ? Component : 
            <NavLink to="/signin" ref={navLinkRef} style={{ display: 'none' }}></NavLink>

        }
    </>)
};

export default Protected;

