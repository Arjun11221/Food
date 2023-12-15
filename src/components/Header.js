import { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const status = useOnlineStatus();

  // useEffect(()=>{
  //   console.log("useEffect Called");
  // },[]);

  return (
    <div className="flex h-32 justify-between bg-slate-900 text-white shadow-2xl ">
      <div className="flex">
        <img className="w-24 my-5 rounded-lg mx-20" src={LOGO} />
      </div>
      <div className=" w-6/12 ">
        <ul className="justify-between my-12 mx-10 font-sans font-semibold text-xl flex gap-5" >
          <li>
            Status : {status ? "Online" : "Offline" }
          </li>
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
          <li>Cart</li>
          <button
            className="bg-slate-200 p-4 rounded-lg text-black "
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
