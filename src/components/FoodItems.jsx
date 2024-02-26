import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ItemCard from './ItemCard';

function FoodItems() {
    const catagoryName = useLocation().pathname.split('/')[2];//this will give the specific catagory name
    const [data , setData] = useState([]);
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catagoryName}`)
        .then(res => res.json())
        .then(info => setData(info.meals))
    },[catagoryName])

    
    return (
        <>
        <h1 className='text-5xl text-center  py-2 rounded-md'> {catagoryName} </h1>
        <div className='grid grid-cols-3'>
            {
                data.map((item)=><ItemCard key={item.idMeal} item={item} /> )
            }
        </div>
        </>
    )
}

export default FoodItems
