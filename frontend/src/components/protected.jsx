import {React, useEffect} from 'react';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';

const Protected = ({ elementBody:Component}) => {
    const Navigate = useNavigate();
    const isLoggedIn = Cookies.get("token")
    console.log("I hit here");

    useEffect(() => {
        if (!isLoggedIn) {
            Navigate('/signin');
        }
    }, [isLoggedIn, Navigate]);

    return (<>
    {
        isLoggedIn?Component:<Navigate to="/signin"/>
    }
    </>)
};

export default Protected;

