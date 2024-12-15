import React from "react";

function LeftBottom() {
  const leftB = [
    {
      image: "https://img.icons8.com/?size=100&id=85559&format=png&color=000000",
      heading: "Email",
      Data: "saranshs@s.s",
    },
    {
      image:
        "https://img.icons8.com/?size=100&id=78382&format=png&color=000000",
      heading: "Phone",
      Data: "1234567890",
    },
    {
      image:
        "https://img.icons8.com/?size=100&id=7880&format=png&color=000000",
      heading: "location",
      Data: "khsipra,indore",
    },
  ];
  const links = [
    {
      link: "https://github.com/saranshsinghal5",
      image:
        "https://img.icons8.com/?size=100&id=12599&format=png&color=000000",
    },
    {
      link: "https://leetcode.com/problemset/",
      image:
        "https://img.icons8.com/?size=100&id=S22n5FcHWTiO&format=png&color=000000",
    },
    {
      link: "https://www.linkedin.com/in/saransh-singhal-3b9170229/",
      image:
        "https://img.icons8.com/?size=100&id=98960&format=png&color=000000",
    },
    {
      link: "https://www.linkedin.com/in/saransh-singhal-3b9170229/",
      image:
        "https://img.icons8.com/?size=100&id=100006&format=png&color=000000",
    },
  ];

  return (
    <>
      {leftB.map((elem, index) => (
        <div>
          <div className=" flex m-">
            <div className="h-11 w-12 bg-red-100 m-4 rounded-lg place-items-center content-center border-s-2 border-t-2 shadow-lg shadow-red-950 border-red-400 ">
              <img
                className="  basis-1/4 h-6 w-6 rounded-xl  "
                src={elem.image}
                alt="image"
              />
            </div>
            <div className="basis-3/4 py-5">
              <p className="font-bold text-xs">{elem.heading}</p>
              <p className="font-bold text-sm">{elem.Data}</p>
            </div>
          </div>
        </div>
      ))}
      <div className='my-5 flex flex-row gap-3 place-content-center place-items-center'>
   {links.map((elem ,index)=>(
    
    <a className='h-6 w-6 ' href={elem.link}>
        <img src={elem.image} alt="" />
    </a>

   ))}
   </div>
    </>
  );
}

export default LeftBottom;
