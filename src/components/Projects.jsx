import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projectData = [
    {
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BudgetBee - Easy Budgeting",
      category: "Android",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Encrypto - Safe & Secure",
      category: "Android",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BudgetBee - Easy Budgeting",
      category: "WebDev",
    },
    {
      image:
        "https://images.unsplash.com/photo-1683199320521-38e3370de70d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Encrypto - Safe & Secure",
      category: "Android",
    },
    {
      image:
        "https://images.unsplash.com/photo-1580983561371-7f4b242d8ec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BudgetBee - Easy Budgeting",
      category: "Android",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Encrypto - Safe & Secure",
      category: "WebDev",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BudgetBee - Easy Budgeting",
      category: "WebDev",
    },
  ];
  return (
    <>
      <div className=" mt-[-3vh] m-7 text-white">
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="flex flex-wrap gap-8 mt-10 m-1">
          {projectData.map((elem, index) => (
            <ProjectCard
              image={elem.image}
              title={elem.title}
              category={elem.category}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
