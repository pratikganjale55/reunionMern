import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContextProvide } from './Authcontext';

const PrivateContext = ({children}) => {

    const {privacy} = useContext(AuthContextProvide) ;
    if(!privacy){
          return <Navigate to="/login"/>
    }
    return children ;
}

export default PrivateContext
