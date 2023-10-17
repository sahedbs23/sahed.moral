import React, {useEffect, useState} from "react";
import {PROJECTS} from "@/dataSource/data/projects";
import experiences from "@/dataSource/data/experiences";
import ProjectCard from "@/components/shared/ProjectCard";
import FeaturedProject from "@/components/shared/FeaturedProject";

const Projects = () => {
    const features: string[] = ["Leading Backend Development", "Performance Optimization", "Database Design", "Team Collaboration", "PR Review"];

    const achievements = experiences[0].positions[0].achievements;
    const technologies: string[] = [
        "PHP", "Laravel", "Symfony",
        "Node.JS", "Next.JS", "Datadog",
        "Aurora MySQL", "Redis", "ElasticSearch",
        "SCSS", "Eslint", "Babel",
        "Docker", "AWS S3", "Snyk",
        "PayPal", "Adyen", "KG Inicis"
    ];

    return (
        <section>
            <div className="text-center text-[22px] leading-[24px] font-normal text-black uppercase px-2 py-16">
                <h1 className="py-4">
                    <span className="border-b border-dashed border-black">FEATURED PROJECT</span>
                </h1>
                <h2>Milestone Moments: A Project That Ignited My Pride</h2>
            </div>

            <section className="bg-[#f9f9f9] md:mx-32 rounded">
                <div className="w-full flex flex-col items-center text-center px-0 py-4">
                    <h1 className={`text-4xl leading-[60px]`}>
                        <a href="https://www.123rf.com" className="hover:border-black hover:border-b hover:border-solid text-[#0a66c2]">
                            123RF
                        </a>
                    </h1>

                    <h2 className="text-black text-center text-xl uppercase mb-8">
                        A stock photo agency with 28 Million customers
                    </h2>
                    <div className="w-full flex flex-col gap-5">
                        <FeaturedProject
                            imageSrc="https://s3.tebi.io/sahed/Banner.png"
                            alt="123 Royality Free Stock collection Home page"
                            cssClass="block"
                        >
                            <>
                                <h2 className="text-black text-center text-[14px] uppercase">
                                    <span className="pb-2 border-b border-black border-dashed">
                                        Roles and Responsibilities
                                    </span>
                                </h2>
                                <ul className="list-disc pl-4 mt-4">
                                    {features.map(feature => (
                                        <li key={feature} className="text-[14px]">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        </FeaturedProject>
                        <FeaturedProject
                            imageSrc="https://s3.tebi.io/sahed/RF-collections.png"
                            alt="123 Royality free stock collections"
                            cssClass="hidden md:block"
                        >
                            <>
                                <h2 className="text-black text-center text-[14px] uppercase">
                                    <span className="pb-2 border-b border-black border-dashed">
                                        Achievements
                                    </span>
                                </h2>
                                <ul className="list-disc pl-4 pt-4">
                                    {achievements.map(feature => (
                                        <li key={feature} className="text-[14px]">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        </FeaturedProject>
                        <FeaturedProject
                            imageSrc="https://s3.tebi.io/sahed/ai-image-writer.png"
                            alt="123 Royality Free Stock contributors"
                            cssClass="hidden md:block"
                        >
                            <>
                                <h2 className="text-black text-center text-[14px] uppercase">
                                    <span className="pb-2 border-b border-black border-dashed">Technology Used</span>
                                </h2>
                                <ul className="flex flex-row gap-5 flex-wrap justify-around mt-4">
                                    {
                                        technologies.map(t => (
                                            <li className="min-w-[120px] text-center bg-white hover:bg-black-100 text-black-400 py-2 px-4 border border-black-400 rounded shadow text-[14px]"
                                                key={t}>
                                                <span className="">{t}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </>
                        </FeaturedProject>
                        <div>
                        </div>
                    </div>
                </div>
            </section>
            <h2 className="text-center py-8 uppercase my-8">
                <span className="border-black border-b border-dashed">Highlighted Projects</span>
            </h2>
            <ul className="flex flex-col  gap-8 items-center justify-center md:mx-32 list-none">
                {PROJECTS.map((proj, idx) => (
                    <ProjectCard
                        key={idx}
                        {...proj}
                    />
                ))}
            </ul>

        </section>
    );
}
export default Projects;
