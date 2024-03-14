import {SWIGGY_RES_IMG} from "../utils/constants"

const RestaurantCard = (props) => {

    const {resData} = props; 

    // console.log(resData.id);

    return (
        <div className="res-card">
            <h2>{resData.name}</h2>
            <img alt="" width="100%" height="50%" src={SWIGGY_RES_IMG + resData.cloudinaryImageId}  />
            <h4>{resData.cuisines.join(", ")}</h4>
            <h4>{resData.avgRating}</h4>
            <h4>{resData.costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;