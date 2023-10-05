import React from "react";
import {PROJECTS} from "@/dataSource/data";
import ProjectCard from "@/components/shared/ProjectCard";
import FeaturedProject from "@/components/shared/FeaturedProject";

const Projects = () => {
    const features:string[]  = ["Lead Backend Development", "Performance Optimization", "Database Design", "Team Collaboration", "PR Review"];

    const achievements:string[]  = ["Added support for new payment methods, resulting in 15% increase in annual revenue",
        "Developed REST APIs in a distributed setup, Optimized API performance through strategic caching",
        "Refactored and optimized legacy PHP codebase, 3X reduction in response time",
        "Designed and built pricing and checkout page, achieving a 20% page load speed improvement via Server-Side Rendering (SSR) optimization"
    ];
    const technologies:string[]  = ["PHP", "Laravel", "Symfony", "Node.JS", "Next.JS", "Aurora MySQL", "Redis", "ElasticSearch",
        "Docker", "AWS S3", "PayPal", "Adyen"];
    return (
        <section className="bg-white">
            <section className="bg-[#f9f9f9]">
                <div className="w-full flex flex-col items-center text-center py-12">
                    <h1 className={`text-4xl leading-[60px]`}>
                        <a href="https://www.123rf.com" className="underline">
                            123RF
                        </a>
                    </h1>
                    <h2 className="text-[22px] leading-[24px] font-normal text-black uppercase">
                        Milestone Moments: A Project That Ignited My Pride
                    </h2>
                    <h2 className="text-black text-center text-[14px] uppercase">
                        A stock photo agency with 28 Million customers
                    </h2>
                    <div className="w-full flex flex-col gap-5 m-10">
                        <FeaturedProject imageSrc="/Banner.png" alt="123 Royality Free Stock collection Home page">
                            <>
                                <h2 className="text-black text-center text-[14px] uppercase">
                                    <span className="pb-2 border-b border-black border-dashed">
                                        My Roles and Responsibilities
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

                        <FeaturedProject imageSrc="/RF-collections.png" alt="123 Royality free stock collections">
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

                        <FeaturedProject imageSrc="/ai-image-writer.png" alt="123 Royality Free Stock contributors">
                            <>
                                <h2 className="text-black text-center text-[14px] uppercase">
                                    <span className="pb-2 border-b border-black border-dashed">Technology Used</span>
                                </h2>
                                <ul className="flex flex-row gap-5 flex-wrap justify-around mt-4">
                                    {
                                        technologies.map( t=> (
                                            <li className="min-w-[120px] text-center bg-white hover:bg-black-100 text-black-400 py-2 px-4 border border-black-400 rounded shadow text-[14px]"  key={t}>
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
            <h2 className="text-center py-8">Featured Projects</h2>
            {PROJECTS.map((proj, idx) => (
                <ProjectCard
                    key={idx}
                    number={idx + 1}
                    {...proj}
                />
            ))}
        </section>
    );
}
export default Projects;
