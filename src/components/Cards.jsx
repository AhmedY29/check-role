import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AddChar from "./AddChar";

function Cards(props) {
  const [character, setCharacter] = useState([]);
  let userInfo = JSON.parse(localStorage.getItem("UserName-Account"));

  useEffect(() => {
    setCharacter(props.characters);
  }, [props.characters]);

  const handleAddChar = () => {
    if (userInfo) {
      props.setOpenAddDialog(true);
    } else {
      toast.error("You have To Login to add New Character");
      return;
    }
  };

  console.log(character);
  return (
    <div className="w-full flex flex-col items-center justify-center p-1">
      {userInfo?.role == "admin" ? (
        <button
          onClick={handleAddChar}
          className="bg-black text-white p-2 rounded-xl my-10"
        >
          Add
        </button>
      ) : (
        ""
      )}
      <div className="w-[80%] flex justify-center items-center gap-2">
        <div className="cards text-center w-full gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AddChar
            open={props.openAddDialog}
            setOpen={props.setOpenAddDialog}
          />
          {character?.map((char) => (
            <div
              key={char.id}
              className={` character flex flex-col justify-between border-3 ${
                char.gender == "male" ? "border-sky-500" : "border-pink-300"
              } p-2 rounded-lg hover:shadow-lg hover:scale-102 transition-all duration-200`}
            >
              <div className="img">
                <img
                  src={char.avatar}
                  alt=""
                  className="h-[15rem] rounded-lg"
                  width={500}
                />
              </div>
              <div className="title">
                <h1 className="text-2xl font-bold">{char.name}</h1>
              </div>
              <div className="gender">
                <h1
                  className={`${
                    char.gender == "male" ? "bg-sky-500" : "bg-pink-300"
                  } uppercase text-center p-1 rounded-lg`}
                >
                  {char.gender}
                </h1>
              </div>

              <div
                className={`delete-btn ${
                  userInfo?.role == "admin" ? "" : "hidden"
                } `}
              >
                <button
                  onClick={() => handleDeleteOpen(char)}
                  className="bg-red-300 p-2 rounded-xl cursor-pointer mt-1"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEditOpen(char)}
                  className="bg-red-300 p-2 rounded-xl cursor-pointer mt-1"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
