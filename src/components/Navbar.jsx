import React from "react";
import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="w-full flex justify-center p-2 bg-black rounded-b-xl text-white">
      <div className="w-[80%] flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <h1 className=" text-xl font-bold">Home</h1>
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
