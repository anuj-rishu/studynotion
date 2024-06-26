import React from 'react'
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({isLoggedIn , children}) => {
    // const naviagte = useNavigate();
    if(isLoggedIn){
        return children
    }
  else{
    return <Navigate to ="/login"/>
  }
}

export default PrivateRoute