import React from "react";
import ProjectCardInterface from "@/interfaces/ProjectCardInterface";

const ProjectCard:React.FC<ProjectCardInterface> = ({ title, link, imgUrl, number }) => {
    return (
            <a href={link}>

            </a>
    );
};

export default ProjectCard;