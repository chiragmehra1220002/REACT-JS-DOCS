import  {Navigate} from "react-router-dom";
import React from 'react'

function RequireAuth({children}) {
    const loggedIn = true;
    if(loggedIn){
        return children;
    }
  return (
    <Navigate to="/login" />
  )
}

export default RequireAuth
