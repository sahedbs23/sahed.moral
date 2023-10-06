import React from "react";
import ProjectCardInterface from "@/interfaces/ProjectCardInterface";

const ProjectCard: React.FC<ProjectCardInterface> = ({title, link, imgUrl,technologies}) => {
    return (
        <li className="w-full min-h-[150px] h-full p-[10px] bg-[#f9f9f9]">
                <div className="flex flex-col gap-10 md:flex-row">
                    <div className="w-1/2 min-h-[150px]">
                        <a href={link}>
                            <img src={imgUrl} alt={title}/>
                        </a>
                    </div>
                    <div className="w-1/2">
                        <h2>{title}</h2>
                        <h4>Bangalink is a digiral comunication media</h4>
                        <ul className="flex flex-row gap-5 flex-wrap justify-around mt-4">
                            {
                                technologies?.map(t => (
                                    <li key={t}
                                        className="min-w-[120px] text-center bg-white hover:bg-black-100 text-black-400 py-2 px-4 border border-black-400 rounded shadow text-[14px]">
                                        <span className="">{t}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
        </li>

    );
};

export default ProjectCard;