import { useContext, useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useStatus";
import LoginContext from "../utils/LoginContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const status = useOnlineStatus();

  // useEffect(()=>{
  //   console.log("useEffect Called");
  // },[]);

  const { loginUser } = useContext(LoginContext);
  // console.log(data);

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex h-32 justify-between bg-slate-900 text-white shadow-2xl ">
      <div className="flex">
        <img className="w-24 my-5 rounded-lg mx-20" src={LOGO} />
      </div>
      <div className=" w-7/12 ">
        <ul className="justify-between my-12 mx-10 font-sans font-semibold text-xl flex gap-5">
          <li>Status : {status ? "Online" : "Offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart - ({cartItems.length} Items )</Link>{" "}
          </li>
          <li>
            <button
              className=""
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="">{loginUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
