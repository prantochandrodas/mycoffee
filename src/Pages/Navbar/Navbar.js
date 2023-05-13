import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { AuthContext } from '../Contexts/AuthProvider';
const Navbar = () => {
    const [state, setState] = useState(false);
   
    const { userLogout, user } = useContext(AuthContext);
    console.log(user)
    const navigate = useNavigate();
    const handelLogout = () => {
        userLogout()
            .then(() => {
                // console.log('hi')
                navigate('/login')
                setState(!state);
            })

    }
    const menu = <>
        <Link to='/' onClick={() => setState(!state)}> <li className='lg:ml-5 text-lg lg:mt-0 mt-4  font-[500]'>Home</li></Link>
        <Link to='/menu' onClick={() => setState(!state)}> <li className='lg:ml-5 text-lg lg:mt-0 mt-4 font-[500]'>Menu</li></Link>

    </>
    return (
        <nav className={` ${state ? 'mobileNavSticky bg-[#212121] lg:bg-[#212121] lg:text-white text-white' : 'NavSticky'} w-full  border-b md:border-0 md:static`}>
            <div className="items-center lg:w-[90%] lg:mx-auto px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="javascript:void(0)">
                        <img
                              src='https://images.squarespace-cdn.com/content/v1/5d5c35d09c5b31000112bab9/1612419761339-JJJEVBO588CVF0REACOU/logo-cafecito-red-transparent.png?format=1500w' 
                            width={120}
                            height={50}
                            alt="Float UI logo"
                        />
                    </a>
                    <div className="md:hidden">
                        <button className="text-white outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {menu}
                    </ul>
                </div>
                <div className={`md:flex items-center ${state ? 'flex py-4' : 'hidden'}`}>
                    {
                        user?.photoURL? <> <div className="avatar mr-2">
                        <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={user?.photoURL} />
                        </div>
                      </div></>:<></>
                    }
                    {
                        user?.uid ? <button className="btn bg-[orange] btn-sm" onClick={handelLogout}>Logout</button> : <>
                            <Link to='/signUp'> <button className="btn bg-[orange] btn-sm" onClick={() => setState(!state)}>SignUp</button> </Link>
                            <Link to='/login'> <button className="btn bg-[orange] btn-sm ml-2" onClick={() => setState(!state)}>Login</button> </Link>
                        </>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;