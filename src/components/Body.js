import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listOfRestaurant, setlistOfRestaurant] = useState(resList); 

    return(
        <div className="body">
            <div className="search"> Search </div>

            <div className="filter">
                <button className="filter-btn"
                        onClick={
                                () => {
                                    const filterData = listOfRestaurant.filter( (res) => res.avgRating>4);
                                    setlistOfRestaurant(filterData); 
                                }
                        }>
                    Top Rated Restaurant
                </button>
            </div>

            <div className="res-container">
                {listOfRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.id} resData={restaurant} />))}
            </div>
        </div>
    )
}

export default Body; 