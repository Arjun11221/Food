import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useStatus";

const Body = () => {
  const [list, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.763089020178832&lng=77.26507069360963&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const status = useOnlineStatus();

  if (status === false) return <h2>Check Your Internet Connection!!</h2>;

  return list?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-center gap-16 p-10 ">
        <div className="flex justify-center gap-7">
          <input
            type="text"
            placeholder=" Search for restaurant and food"
            className="border border-black  rounded-md outline-none w-96 h-11 "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-slate-950 text-yellow-50 p-3 rounded-md"
            onClick={() => {
              const filteredRestaurant = list.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterList(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          data-testid="filter"
          className="bg-slate-950 text-yellow-50 p-3 rounded-md"
          onClick={() => {
            const filteredList = list.filter((res) => res.info.avgRating > 4);
            setFilterList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <hr className="border-black"></hr>
      <div className="flex flex-wrap mx-9 my-5 ">
        {filterList?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
