import React, { useEffect, useState } from 'react';
import HomeMenu from './HomeMenu';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const HomeMenus = () => {
    const [datas, setDatas] = useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('https://mycoffee-server.vercel.app/homemenus')
            .then(res => res.json())
            .then(result =>{
                setLoading(false);
                setDatas(result)
            });
    }, [])

    if(loading){
        return <Spinner></Spinner>
    }
    return (
        <div>
            <div className='w-[90%] mx-auto lg:my-10 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-[20px]'>
                {
                    datas.map(data => <HomeMenu
                        key={data._id}
                        data={data}
                    ></HomeMenu>)
                }

            </div>
            <div className='flex items-center justify-center'>
               <Link to='/menu'> <button className='btn btn-primary my-10'>See More</button></Link>
            </div>
        </div>
    );
};

export default HomeMenus;