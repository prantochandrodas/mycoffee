import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../Firebase/firebase-config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [user, SetUser] = useState(null);
    //signup
    const userSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login 
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    //logout 
    const userLogout = () => {
        setLoading(true);
        return signOut(auth);
    }
   
    // userObserver 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            SetUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

     //update user 
     const userUpdata = (userInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser,userInfo);
    }
    const authInfo = {
        userSignUp,
        userLogout,
        userLogin,
        loading,
        user,
        userUpdata
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;