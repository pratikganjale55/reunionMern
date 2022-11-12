import React from 'react' ;
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContextProvide } from '../AuthCotext/Authcontext';
import "../createAccount/create.css" ;

const LOgin = () => {

  const [login, setLogin] = useState({}) ;
  const {loginSuccess} = useContext(AuthContextProvide) ;
  const navigate = useNavigate()

  const handleChange = (e) => {

    const {name, value} = e.target ;
    setLogin({
        ...login,
        [name] : value
    })
}
    const handleSubmit = async(e) => {
      e.preventDefault() ;
      let payload = JSON.stringify(login) ;
     
      await fetch("https://reunionmini.herokuapp.com/login", {
        headers : {
          "Content-Type" : "application/json"
        },
        method : "POST" ,
        body : payload
      })
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        if(data.massage == 'wrong credentials '){
          window.alert("wrong Credientals")
      }else {
        window.alert(`login successful , token: ${data.token}`) ;
        
        localStorage.setItem("userToken", JSON.stringify(data.token))
        localStorage.setItem("userId", JSON.stringify(data.id))
      let check =   loginSuccess()
        if(check){
          navigate("/")
        }else {
            window.alert("wrong credentials")
        }
        
      }
      }).catch(e => console.log(e)) 
    }
  return (
    <div>
      <main className="form-signin  m-auto mt-5 register">
        <form>
            
            <h1 className="h3 mb-3 fw-normal stroke_text registerText"> LOGIN</h1>
            <div className="form-floating mt-2">
            <input type="email" className="form-control registerInput" id="floatingPassword" name="email" onChange={handleChange} placeholder="Enter email address"/>
            <label for="floatingPassword">Register Email Address</label>
            </div>
             <div className="form-floating mt-2">
            <input type="password" className="form-control registerInput" id="floatingPassword" name="password" onChange={handleChange} placeholder="Enter password"/>
            <label for="floatingPassword"> Password</label>
            </div>
            

          <button className="w-100 btn btn-lg  regsiterButton mt-2 " type="submit" onClick={handleSubmit}>LOGIN</button>
         <p>Have account use register email and password to login ? Don,t have <Link to="/newuser"><b>Create Account</b></Link></p>
            
        </form>
</main>
    </div>
  )
}

export default LOgin
