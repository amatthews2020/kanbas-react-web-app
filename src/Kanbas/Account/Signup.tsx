import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign Up</h3>
      <input placeholder="username" className="form-control mb-2"/>
      <input placeholder="password" type="password" className="form-control mb-2"/>
      <input placeholder="confirm password" type="password" className="form-control mb-2"/>
      <Link to="/Kanbas/Dashboard"
            className="btn btn-primary w-100"> Sign up </Link>
      <Link to="/Kanbas/Account/Signin">Sign in</Link>
    </div>
);}
