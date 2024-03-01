import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import CatagoryCard from './CatagoryCard';

function Catagory() {

    const data = useLoaderData();//here comes the data from the api
    const catagoryList = data['categories']; //Here is the list of the catagories 
    return (
        <>
        <h1 className='text-5xl font-bold text-gray-800 border-b-4 mb-4 text-center pb-2' >Chose Category </h1>
        <div className=' grid grid-cols-6'>
            {
                catagoryList.map((Catagory) => <CatagoryCard key={Catagory.idCategory} items={Catagory}/>)
            }


        </div>
        <div>
            <Outlet></Outlet>
        </div>
        <h1>This is catagory Page {catagoryList.length} </h1></>
    )
}

export default Catagory
