import React from "react";
import LeftBottom from "./LeftBottom";

function Left() {
  return (
    <>
      <div className="h-[114vh] my-16 ml-7  min-w-[22vw] bg-red-200 rounded-2xl p-5 flex flex-col text-white">
        <img
          className="h-[11vw] w-[11vw] rounded-[2vw] mx-12 mt-12 ] "
          src="https://plus.unsplash.com/premium_photo-1732757787588-29df717691f4?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        />
        <p className="text-2xl font-semibold text-center mt-5">Saransh Singhal</p>
        <div className="place-self-center flex flex-wrap content-center h-6 w-36 bg-zinc-600 rounded-lg content-normal m-2  ">
          <p className="text-center text-xs font-semibold p-4">
            Software Developer
          </p>
        </div>
        <hr className="mx-8 my-6 border-cyan-500 " />
        <LeftBottom />
      </div>
    </>
  );
}

export default Left;
