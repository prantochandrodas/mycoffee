import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PriveteRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location =useLocation();
    if(loading){
        return <p>loading...</p>
    }
    if(user){
        return children;
    }else{
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
};

export default PriveteRoute;