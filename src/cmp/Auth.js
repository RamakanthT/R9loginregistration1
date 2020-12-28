import React, { Component } from 'react';
import {
    Redirect
} from "react-router-dom";

class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRegister: false,
        }
    }

    login() {
        // alert("123");
        console.warn("state", this.state);
        //api call - commented as no local call
        /* fetch('http://127.0.0.1:8000/api/login',{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-type":"application/json",
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp);
                localStorage.setItem("auth", JSON.stringify(resp.success.token))
                //to check it in browser console you can write: localStorage.getItem('auth')
                //after validation, service returns a token, store that token inour localStorage
            })
        }) */
        //cross origin issue can be resolved two types
        //1. front end using plugin
        //2. backend
        if (this.state.email === "admin" && this.state.password === "admin") {
            localStorage.setItem("auth", "tokenRamakanth123")
        } else {
            localStorage.removeItem("auth");
        }
    };

    register() {
        // alert("123");
        console.warn("state", this.state);
        //api call - commented as no local call
        /* fetch('http://127.0.0.1:8000/api/register',{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-type":"application/json",
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp);
                localStorage.setItem("auth", JSON.stringify(resp.success.token))
                //to check it in browser console you can write: localStorage.getItem('auth')
                //after validation, service returns a token, store that token inour localStorage
            })
        }) */
        //cross origin issue can be resolved two types
        //1. front end using plugin
        //2. backend
        if (this.state.name === "admin" && this.state.email === "admin") {
            localStorage.setItem("auth", "tokenRamakanth123")
        } else {
            localStorage.removeItem("auth");
        }
    };

    render() {

        var authToken = localStorage.getItem("auth");

        return (
            <div>
                {
                    //authToken ? <Redirect to="/home" /> : null
                    authToken ? <Redirect to="/" /> : <Redirect to="/" /> //for local working and remove localStorage
                }
                {
                    this.state.isRegister === false ?
                        <div>
                            <input type="text" placeholder="email" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                            <br /><br />
                            <input type="text" placeholder="password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                            <br /><br />

                            <button onClick={() => this.login()}>Login</button>
                            <button onClick={() => this.setState({ isRegister: true })}>go to Register</button>
                            <br />
                            <h6>put admin &amp; admin to login and create token, put any other and login, it will clear token in localstorate. 
                                This is for testing purpose</h6>
                            <h6>Go to prod list tab to see values if login successful</h6>
                        </div>
                        :
                        <div>
                            <input type="text" placeholder="name" onChange={(e) => { this.setState({ name: e.target.value }) }} />
                            <br /><br />
                            <input type="text" placeholder="email" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                            <br /><br />
                            <input type="text" placeholder="password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                            <br /><br />
                            <input type="text" placeholder="confirm password" onChange={(e) => { this.setState({ c_password: e.target.value }) }} />
                            <br /><br />

                            <button onClick={() => this.register()}>Register</button>
                            <button onClick={() => this.setState({ isRegister: false })}>go to Login</button>
                            <br />
                            <h6>put name:admin &amp; email:admin to register and create token, put any other and register, it will clear token in localstorate. 
                                This is for testing purpose</h6>
                            <h6>Go to prod list tab to see values if login successful</h6>
                        </div>
                }


            </div>
        )
    }
}

export default Auth;