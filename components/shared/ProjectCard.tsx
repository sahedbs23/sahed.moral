import React from "react";
import ProjectCardInterface from "@/interfaces/ProjectCardInterface";
import Image from "next/image";
import Link from "next/link";

const ProjectCard: React.FC<ProjectCardInterface> = ({title,role, description, link, imgUrl, technologies}) => {
    return (
        <li className="w-full min-h-[150px] h-full p-[10px] bg-[#f9f9f9] text-center rounded">
            <div className="mt-4 mb-8">
                <h2 className="pt-2">
                    <Link href={link} target="_blank"className="uppercase hover:border-black hover:border-b hover:border-solid text-[#0a66c2]" >
                        {title}
                    </Link>
                </h2>
                <h3 className="font-normal text-[18px]">Role: {role}</h3>
                <h4 className="font-normal text-[16px] text-black leading-5 ">{description}</h4>
            </div>
            <div className="flex flex-col gap-10 md:flex-row mt-4 mb-8 items-center justify-center">
                <div className="w-full md:w-1/2 min-h-[150px] bg-white rounded p-3">
                    <a href={link}>
                        <Image height={258} width={458} src={imgUrl} alt={title} priority={true} />
                    </a>
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-black text-center text-[14px] uppercase">
                        <span className="pb-2 border-b border-black border-dashed">Technology Used</span>
                    </h2>
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