import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useResMenu(resId);

  const [showIndex , setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold my-8 ">{name}</h1>
      <h3 className="text-xl font-semibold">
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      {categories.map((category , index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItems = {index === showIndex ? true : false}
          setShowIndex = {()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
