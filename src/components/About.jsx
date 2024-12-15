import React from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import Working from "./Working";
import TestimonialCard from "./TestimonialCard";

function About() {
  const data1 = [
    {
      image: "https://img.icons8.com/?size=100&id=ZwGNoFXGbt9n&format=png&color=000000",
      heading: "Android Development",
      description:
        "Creating user-friendly Android apps with modern design and performance.",
    },
    {
      image: "https://img.icons8.com/?size=100&id=61192&format=png&color=000000",
      heading: "Backend Development",
      description:
        "Developing secure, scalable backends with Spring and Spring Boot.",
    },
  ];

  const data2 = [
    {
      image: "https://img.icons8.com/?size=100&id=wLbzJQRzbYNN&format=png&color=000000",
      heading: "Web Development",
      description:
        "Learning to build dynamic websites with modern web technologies.",
    },
  ];
   
  const testimonialData = [
    {avatar:"#",
     name:"saransh",
     testimonial:"Ek number kaam kiya hai bhai apne"
    },
    {avatar:"#",
      name:"Shivam",
      testimonial:"waah kya kaam kiya hai bhai apne"
     },
     {avatar:"#",
      name:"GDSC",
      testimonial:"kyaa kaam kiya hai bhai apne"
     },
  ];

  return (
    <div className=" mt-[-3vh] m-7 text-white">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="text-base mt-8 text-zinc-100 tracking-tight">
        I am a passionate software developer with a focus on Android
        development, specializing in building high-performance mobile
        applications using Kotlin and Java. I have hands-on experience in
        developing cross-platform apps, integrating modern UI/UX designs, and
        optimizing backend systems. I'm always exploring new technologies and
        enjoy solving complex problems through efficient code.
      </p>
      <p className="text-base mt-6 text-zinc-100 tracking-tight">
        Currently pursuing my B.Tech, I actively contribute to technical
        projects and hold leadership positions, such as Chairperson of the
        PES-IAS Chapter at IEEE DTU.
      </p>
      <p className="text-2xl mt-6 font-bold">What I'm Doing</p>
      <div className="flex gap-8">
        {data1.map((elem, index) => (
          <Working
            image={elem.image}
            heading={elem.heading}
            description={elem.description}
          />
        ))}
      </div>
      <p className="text-2xl mt-6 font-bold">What I'm Learning</p>
      <div className="flex ">
        {data2.map((elem, index) => (
          <Working
            image={elem.image}
            heading={elem.heading}
            description={elem.description}
          />
        ))}
      </div>
      <p className="text-2xl mt-6 font-bold ">Testimonials</p>
      <div className="flex gap-7 w-[68vw] overflow-x-auto">
      {
        testimonialData.map((elem,index)=>(
          <TestimonialCard avatar={elem.avatar} name={elem.name} testimonial={elem.testimonial}/>
        ))
      }
      </div>
    </div>
  );
}

export default About;
