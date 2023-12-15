import { CDN_LOGO } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;
    return (
      <div className="m-4 p-4 w-64 bg-zinc-200 rounded-lg hover:bg-slate-300">
        <img
          className="rounded-b-md"
          src={CDN_LOGO + cloudinaryImageId}
        />
        <div className="res-about my-2">
          <h3 className="font-semibold text-lg" >{name}</h3>
          <h4>{cuisines.join(" ")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{costForTwo} </h4>
          
          
        </div>
      </div>
    );
  };

  export default RestaurantCard;