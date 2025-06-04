import React from "react";
import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="w-full flex justify-center p-1 bg-black/50 text-white">
      <div className="w-[80%] flex justify-between items-center gap-2">
        <div className="flex gap-2">
          <h1 className=" text-xl font-bold">Home</h1>
          <ul>
            <li>About</li>
          </ul>
        </div>

        <h1
          className="text-2xl cursor-pointer"
          onClick={() => {
            navigate("/signin"), localStorage.clear();
          }}
        >
          Logout
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;
