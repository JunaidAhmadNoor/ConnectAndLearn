import { Component, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Protected(props){
    const {Component} = props;
    const Navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('signin');
        if(!login){
            Navigate('/signin')
        }
    });
    return(
        <div>
            <Component/>
        </div>
    )
}