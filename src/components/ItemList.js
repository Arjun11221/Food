import { useDispatch } from "react-redux";
import { CDN_LOGO } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();
  const handleAddItem = (item)=>{
    dispatch(addItem(item));
  }
  
  return (
    <div>
      {items.map((item) => (
        <div
        data-testid = "food"
          className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between "
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                ₹-{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <button
            className="bg-black p-3 m-auto rounded-md text-white"
            onClick={() => handleAddItem(item)}
          >
            Add+
          </button>
          <div className="w-3/12 p-4">
            <img className=" rounded" src={CDN_LOGO + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
