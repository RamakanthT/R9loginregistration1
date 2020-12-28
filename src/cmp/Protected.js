import React from 'react';
import {
    Redirect
  } from "react-router-dom";

function Protected(props) {
    const Cmp = props.cmp;
    var authToken = localStorage.getItem("auth");
    console.warn(authToken);
    
    return <div> {authToken ? <Cmp /> : <Redirect to="/"></Redirect> }</div>
    //if authToken exist then goto Cmp or else go to login i.e Auth.js
}

export default Protected;