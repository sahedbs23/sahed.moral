import React from "react";

import ProjectCard from "@/components/shared/ProjectCard";
import PageIntro from "@/components/shared/PageIntro";
import {PROJECTS} from "@/dataSource/data/projects";

const Projects = () => {
    return (
        <section id="projects" className="bg-[#fafafa] py-16 px-0">
            <div className="max-w-7xl m-auto w-[92%]">

                <div className="flex flex-col w-full gap-32 justify-items-center items-center pt-32 pb-4">
                    <PageIntro
                        heading="PROJECTS"
                        description="Here you will find some of the personal and clients projects that I created with each project containing its own used technology"
                    />
                </div>

                <ul className="flex flex-col gap-4 md:gap-8 items-center justify-center list-none mt-8 divide-y ">
                    {PROJECTS.map((proj, idx) => (
                        <ProjectCard
                            key={idx}
                            {...proj}
                        />
                    ))}
                </ul>
            </div>

        </section>
    );
}
export default Projects;
