import React from "react";

function Working({ image, heading, description }) {
  return (
    <>
      <div className="">
        <div className="flex h-36 w-[70vh] bg-blue-800 rounded-2xl mt-7 p-5 border-s-2 border-t-2 shadow-xl shadow-blue-900/50">
          <img
            className="h-10 w-10 mt-5 m-2"
            src={image}
            alt="image"
          />
          <div className="m-2 w-[48vh]">
            <h2 className="text-xl font-semibold">{heading}</h2>
            <p className="text-[2.6vh] font-normal mt-2 text-zinc-200">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Working;
