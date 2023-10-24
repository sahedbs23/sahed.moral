import React from "react";
import ProjectCardInterface from "@/interfaces/ProjectCardInterface";
import Image from "next/image";
import Link from "next/link";
import TechnologyLists from "@/components/shared/TechnologyLists";
import parse from 'html-react-parser';

const ProjectCard: React.FC<ProjectCardInterface> = ({title,role, description, link, imgUrl, technologies}) => {
    return (
        <li className="w-full min-h-[150px] h-full bg-[#f9f9f9] text-center pt-6 pb-4 flex flex-col gap-10">
            <div className="flex flex-col items-start justify-items-start md:justify-items-center md:items-center gap-4 font-normal text-[14px] text-[#555]">
                <h2 className="pt-2">
                    <Link href={link} target="_blank" className="uppercase font-bold text-purple text-2xl" >
                        {title}
                    </Link>
                </h2>
                <h4 className=" text-left text-[18px]">{parse(description)}</h4>
            </div>
            <div className="flex flex-col gap-10 md:flex-row justify-between items-center">
                <div className="w-full md:w-1/2 flex flex-col gap-10">
                    <div className="flex flex-col p-2 bg-white rounded group">
                        <Link href={link} target="_blank" className="cursor-pointer grayscale-0 hover:filter hover:grayscale">
                            <Image
                                src={imgUrl}
                                alt={title}
                                width="543"
                                height="305"
                                priority
                                className="w-full h-auto object-contain"
                            />
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-8 justify-evenly">
                    <TechnologyLists headline="Technology used" skills={technologies} />
                </div>
            </div>
        </li>

    );
};

export default ProjectCard;