import React from 'react'
import { NavLink } from 'react-router-dom';

function CatagoryCard({items}) {

    const img = items['strCategoryThumb'];
    const name = items['strCategory'];

    
    return (
        <NavLink to={`/catagory/${name}`}>
        <div className=' outline-1 m-1 hover:translate-x-2 py-2 hover:outline-black hover:bg-blue-gray-400'>
            <img className='rounded-md mx-auto' src={img} alt="" height={50} width={70}/>
            <h1 className='text-3xl font-semibold text-center py-2'>{name}</h1>
        </div>
        </NavLink>
        
    )
}

export default CatagoryCard
