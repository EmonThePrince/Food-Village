import React from 'react'
import { Link } from 'react-router-dom';

function ItemCard({ item }) {

    const { strMeal, strMealThumb, idMeal } = item;
    return (
        <>
            <div className="mb-3 card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={strMealThumb} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{strMeal}</h2>
                    <p>Want to know more details?</p>
                    <div className="card-actions">
                        <Link to={`/details/${idMeal}`}> <button className="btn btn-primary"  >Details</button> </Link>
                    </div>
                </div>
               
            </div>
        </>
    )
}

export default ItemCard
