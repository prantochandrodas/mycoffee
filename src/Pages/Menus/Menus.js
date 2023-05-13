import React, { useEffect, useState } from 'react';
import Menu from '../Menu/Menu';
import Spinner from '../Spinner/Spinner';

const Menus = () => {
    const [datas, setDatas] = useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('https://mycoffee-server.vercel.app/menus')
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
            <div className='w-[90%] lg:my-10 mx-auto grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-[20px]'>
                {
                    datas.map(data => <Menu
                        key={data._id}
                        data={data}
                    ></Menu>)
                }

            </div> 
        </div>
    );
};

export default Menus;