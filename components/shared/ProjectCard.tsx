import React from "react";
import ProjectCardInterface from "@/interfaces/ProjectCardInterface";
import Image from "next/image";
import Link from "next/link";
import TechnologyLists from "@/components/shared/TechnologyLists";
import parse from 'html-react-parser';

const ProjectCard: React.FC<ProjectCardInterface> = ({title,role, description, link, imgUrl, technologies}) => {
    return (
        <li className="w-full min-h-[150px] h-full p-[10px] bg-[#f9f9f9] text-center py-4 flex flex-col gap-10">
            <div className="flex flex-col justify-items-center items-center gap-4 font-normal text-[14px] text-[#555]">
                <h2 className="pt-2">
                    <Link href={link} target="_blank" className="uppercase font-bold text-purple text-2xl" >
                        {title}
                    </Link>
                </h2>
                <h4 className=" text-left text-[18px] max-w-4xl">{parse(description)}</h4>
                {/*<h4 className="text-[16px]">{role}</h4>*/}
            </div>
            <div className="flex flex-col gap-10 md:flex-row py-8 justify-between items-center">
                <div className="w-full md:w-1/2 flex flex-col gap-10">
                    <div className="flex flex-col  p-2 bg-white rounded">
                        <a href={link}>
                            <Image
                                src={imgUrl}
                                alt={title}
                                width="543"
                                height="305"
                                priority
                            />
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-5 justify-evenly">
                    <TechnologyLists headline="Technology used" skills={technologies} />
                </div>
            </div>
        </li>

    );
};

export default ProjectCard;