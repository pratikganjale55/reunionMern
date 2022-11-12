import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { useContext } from 'react'


export const AuthContextProvide = createContext() ;

const Authcontext = ({children}) => {
    const [privacy, setPrivacy] = useState(false) ;
  
    
    
    // login auth

    const loginSuccess = () => {

         const token = JSON.parse(localStorage.getItem("userId")) ;
         if(token){
             setPrivacy(true)
            
             return true ;
         }else {
            return false ;
         }
         
    }




  return (
   <AuthContextProvide.Provider value={{loginSuccess ,privacy}}>{children}</AuthContextProvide.Provider>
  )
}

export default Authcontext
