import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [ showItems , setShowItems] = useState(false);

  const handleClick = ()=>{
    setShowItems(!showItems);
  }
  return (
    <div className="w-6/12 bg-gray-200 mx-auto my-6 p-4 shadow-lg ">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}  >
        <span className="font-semibold text-lg text-black ">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-xl" >🔽</span>
      </div>
      { showItems && <ItemList items={data.itemCards}/>}
    </div>
  );
};

export default RestaurantCategory; 
