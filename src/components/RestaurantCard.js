import { CDN_LOGO } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;
    return (
      <div className="res-card">
        <img
          className="res-img"
          src={CDN_LOGO + cloudinaryImageId}
        />
        <div className="res-about">
          <h3>{name}</h3>
          <h4>{cuisines.join(" ")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{costForTwo} </h4>
          
          
        </div>
      </div>
    );
  };

  export default RestaurantCard;