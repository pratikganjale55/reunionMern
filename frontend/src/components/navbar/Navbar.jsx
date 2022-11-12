import React, { useContext } from 'react' ;
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContextProvide } from '../AuthCotext/Authcontext';

import "./navbar.css" ;


const Navbar = () => {
 


  return (
    <>
          <nav className="navbar" style={{backgroundColor: "#e3f2fd"}}>
            <div className="container-fluid">
              
              <Link to="/" className="navbar-brand" >
              <div>Home</div>
              </Link>
          
              <Link to="/userpost" className="navbar-brand" >
              <div>MyPost</div>
              </Link>
              <Link to="/userDetails" className="navbar-brand" >
              <div>User</div>
              </Link>
              <Link to="/login" className="navbar-brand" >
              <div>Login</div>
              </Link>
              
              <Link to="/newuser" className="navbar-brand" >
              <div>Create Account</div>
              </Link>
            </div>
         </nav>
        
        
      
    </>
  )
}

export default Navbar
