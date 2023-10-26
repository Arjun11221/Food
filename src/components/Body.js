import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [list , setList] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
         const filteredList = list.filter((res) => res.info.avgRating > 4);
          // console.log(filteredList);
          setList(filteredList);
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <hr />
      <div className="res-container">
        {list.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
