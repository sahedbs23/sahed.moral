import React from "react";
import experiences from "@/dataSource/data/experiences";
import Link from "next/link";

const Experience = () => (
    <section>
        <div className="text-center pt-16 pb-8 text-[22px] leading-[24px] font-normal text-black">
            <h1 className="py-4 uppercase">My Experiences</h1>
            <div className="text-xl italic max-w-[700px] m-auto ">
                <p>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    "Through eight years of web-based software development,
                    my journey has been a compelling narrative of stories and struggles,
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    each chapter contributing to my growth as a software engineer."
                </p>
            </div>

            <div className="mt-10  mx-1 md:mx-16">
                <ul className="list-none flex flex-col items-start gap-8">
                {
                    experiences.map(experience => (
                        <li className="flex flex-col md:flex-row gap-5 md:gap-10 p-8 md:p-0" key={experience.year}>
                                <div className="pt-[5px] min-w-[300px]">
                                    <Link
                                        className="border-black border-dashed border-b cursor-pointer"
                                        href={experience.companyLink}
                                        title={experience.company}
                                    >
                                        {experience.company}
                                    </Link>
                                </div>
                                <div className="flex flex-col gap-2 text-left">
                                    <ul className="text-[14px]">
                                        <li className="text-2xl">{experience.title}</li>
                                        <li>{experience.year}</li>
                                        <li>{experience.location}</li>
                                    </ul>
                                    <ul className="list-disc list-outside pl-3 text-[14px]">
                                        {experience.achievements.map((a,index) => (
                                            <li className="py-1" key={`${a} - ${index}`}>{a}</li>
                                        ))}
                                    </ul>
                                </div>
                        </li>
                    ))
                }
            </ul>
            </div>
        </div>
    </section>
)
export default Experience;
