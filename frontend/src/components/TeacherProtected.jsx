import {React, useEffect, useState} from 'react';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TeacherProtected = ({ elementBody:Component}) => {
    const [userData,setUserData]=useState(null);
    const Navigate = useNavigate();
    const isLoggedIn = Cookies.get("token");

    useEffect(()=>{
        if(!userData &&userData?.role){
            Navigate("/signin");
        }
    },[userData])

    useEffect(() => {
        const getUserData=async()=>{
            let token=isLoggedIn;
            //get user data here
            if(token){
                let response=await axios.post('/getUserData',{token});
                setUserData(response.data);
            }
        }
        getUserData();
    }, []);

    return (<>
    {
        isLoggedIn&&userData?.role=="Teacher"?Component:<h1>Access Denied You Are Not A Teacher</h1>
    }
    </>)
};

export default TeacherProtected;

