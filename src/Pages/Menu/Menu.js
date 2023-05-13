import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({data}) => {
    return (
        <div>
        <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm lg:h-full">
            <Link>
                <img src={data.picture} loading="lazy" alt="img" className="w-full lg:w-[500px] lg:h-60 h-48 rounded-t-md" />

                <div className="pt-3 ml-4 mr-2 mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                        {data.name}
                    </h3>
                    <h3 className='text-xl my-4'>
                        Price: ${data.Price}
                    </h3>
                    <p>
                        {data.about}
                    </p>
                    <button className='btn btn-primary my-4'>Book</button>
                </div>
            </Link>
        </article>
    </div>
    );
};

export default Menu;