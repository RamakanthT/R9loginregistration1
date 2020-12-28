
import React, { Component } from 'react';
import {
    BrowserRouter as Link
    // Router,
    // Switch,
    // Route    
  } from "react-router-dom";
  
class Nav extends Component {
    render() {
        return (
            <div>
                <Link to="home" >Home</Link>
                <Link to="about" >About</Link>
                <Link to="list" >Product Listing</Link>
                <Link to="/" >Login</Link>
            </div>
        )
    }
}

export default Nav;

