import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import {setToken} from './Auth.js'
 import LoginImage from './login.png'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [error, setError] = useState('')
    const navigate = useNavigate()
     
    const login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", {
          email: email,
          password: password,
        })
        .then(res => {
            console.log(res);
            if(res.data.Status === 'Success') {
        console.log(res.data.Token);
        setToken(res.data.Token)
                navigate('/');
            } else {
                setError(res.data.Error);
            }
        })
        .catch(err => console.log(err));
    }
    
  return (
        <div className="container" style={{paddingTop: 60}}>
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img src={LoginImage}></img>
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-normal mb-0 me-3">Login to your account</p>
                  </div>
                    <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{error && error}</h1>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                      onChange={(e) => {setEmail(e.target.value)}} required
                    />
                    <label className="form-label">Email address</label>
                  </div>
                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      onChange={(e) => {setPassword(e.target.value)}} required
                    />
                    <label className="form-label">Password</label>
                  </div>
    
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input className="form-check-input me-2" type="checkbox" value=""/>
                      <label className="form-check-label">
                        Remember me
                      </label>
                    </div>
                    <a href="/#" className="text-body">Forgot password?</a>
                  </div>
    
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="button" className="btn btn-primary btn-lg" onClick={login}>Login</button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Login to your account <a href="signup" className="link-danger">Sign Up</a></p>
                  </div>
    
                </form>
              </div>
            </div>
          </div>
        </div>
  );
};
   
export default Login;