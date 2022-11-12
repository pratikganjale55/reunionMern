import axios from 'axios';
import React from 'react' ;
import { useState } from 'react';
import { useNavigate } from 'react-router';
import "./create.css" ;

const Createaccount = () => {

  const [text, setText] = useState({})

  const navigate = useNavigate() ;

  const handleChange = (e) => {
    const {name, value} = e.target ;
    setText({
       ...text ,
       [name] : value
    })
}
    const handleSubmit =async (e) => {
           e.preventDefault() ;
           const payload = JSON.stringify(text) ;
          console.log(payload)
          await fetch("https://reunionmini.herokuapp.com/account", {
            headers : {
                "Content-Type" : "application/json"
            },
            method : "POST" ,
            body : payload
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if(data.massage == "Account create successful") {
              
              alert("Account create successful") ;
             navigate("/login")
          }else if(data.email == "email already exists"){
            alert("email already exists")
          }else if(data.password == "password not same"){
            alert("password not same")
          }
          else {
                alert("fill data")
          }
          })
          .catch((e) => console.log(e))
    }
  return (
    <div>
      <main className="form-signin  m-auto mt-5 register">
        <form>
            
            <h1 className="h3 mb-3 fw-normal stroke_text registerText"> CREATE ACCOUNT</h1>

            <div className="form-floating mt-3">
            <input type="text" className="form-control registerInput" id="floatingInput" name="name" onChange={handleChange} placeholder="Enter fisrt last name"/>
            <label for="floatingInput">First last Name</label>
            </div>
            <div className="form-floating mt-2">
            <input type="email" className="form-control registerInput" id="floatingPassword" name="email" onChange={handleChange} placeholder="Enter email address"/>
            <label for="floatingPassword">Email Address</label>
            </div>
            
            <div className="form-floating mt-2">
            <input type="text" className="form-control registerInput" id="floatingPassword" name="image" onChange={handleChange} placeholder="enter image url"/>
            <label for="floatingPassword"> Image URL</label>
            </div>
            <div className="form-floating mt-2">
            <input type="text" className="form-control registerInput" id="floatingPassword" name="bio" onChange={handleChange} placeholder="Enter bio description"/>
            <label for="floatingPassword"> Bio</label>
            </div>
            <div className="form-floating mt-2">
            <input type="password" className="form-control registerInput" id="floatingPassword" name="password" onChange={handleChange} placeholder="Enter password"/>
            <label for="floatingPassword"> Password</label>
            </div>
            <div className="form-floating mt-2">
            <input type="password" className="form-control registerInput" id="floatingPassword" name="cpassword" onChange={handleChange} placeholder="Re-Enter password"/>
            <label for="floatingPassword">Confirmed Password</label>
            </div>

            
            <button className="w-100 btn btn-lg  regsiterButton mt-2 " type="submit" onClick={handleSubmit}>CREATE ACCOUNT</button>
            
        </form>
</main>

    </div>
  )
}

export default Createaccount
