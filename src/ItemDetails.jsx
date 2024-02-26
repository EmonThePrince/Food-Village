import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function ItemDetails() {

    const itemId = useLocation()['pathname'].split('/')[2];//this will give the id name of the food items
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`)
            .then(res => res.json())
            .then(data => setData(data['meals'][0]))

    }, [itemId])
    const itemName = data["strMeal"];
    const itemCatagory = data['strCategory'];
    const itemArea = data['strArea']
    const imgLink = data['strMealThumb']
    const youtubeLink = data['strYoutube']
    const details = data["strInstructions"]
    return (
        <>
            <div className="px-32 card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={imgLink} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{itemName}</h2>
                    <p>Catagory :{itemCatagory} || Origin Area : {itemArea}</p>
                    <p>{details}</p>
                    <p>YouTube video ? <a className='italic text-blue-800' href={youtubeLink}>Click Here</a></p>
                </div>
            </div>


        </>
    )
}

export default ItemDetails
