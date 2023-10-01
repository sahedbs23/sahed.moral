import React from "react";
import ProjectCardInterface from "@/interfaces/ProjectCardInterface";

const ProjectCard:React.FC<ProjectCardInterface> = ({ title, link, imgUrl, number }) => {
    return (
        <a href={link} className="w-full block shadow-2xl">
            <div className="relative overflow-hidden">
                <div className="h-72 object-cover">
                    <img
                        src={imgUrl}
                        alt="portfolio"
                        className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
                    />
                </div>
                <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                    {title}
                </h1>
                <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                    {number <= 9 ? "0" + number : number}
                </h1>
            </div>
        </a>
    );
};

export default ProjectCard;