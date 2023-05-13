import React, { useContext } from 'react';
import { AuthContent } from '../providers/AuthProvider';
import { NavLink, Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContent);
    const location = useLocation();
    

    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }

    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;