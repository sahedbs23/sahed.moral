// import React, {useEffect, useState} from "react";
import experiences from "@/dataSource/data/experiences";
import Link from "next/link";

const Experience = () => {
    // const [experiances, setExperiances] = useState(null);
    //
    // useEffect((experiances)=>{
    //     setExperiances(experiances)
    // }, [experiances]);
    // const experiences = experiences;
    return (
        <section className="max-w-[768px] mx-auto">
            <div className="text-center pt-16 pb-8 text-[14px] leading-[24px] font-normal text-black">
                <h1 className="py-4 uppercase">My Experiences</h1>
                <div className="text-xl italic p-[20px]">
                    <p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        "Through eight years of web-based software development,
                        my journey has been a compelling narrative of stories and struggles,
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        each chapter contributing to my growth as a software engineer."
                    </p>
                </div>

                <div className="">
                    <ul className="list-none flex flex-col">
                        {
                            experiences.map(experience => (
                                <li
                                    className="text-left"
                                    key={experience.company}
                                >
                                    <h2>
                                        <a href={experience.companyLink}>
                                            {experience.company}
                                        </a>
                                    </h2>
                                    <h3>{experience.location}</h3>
                                    <ul className="">
                                        {
                                            experience.positions.map(p => (
                                                <li key={p.year} className="border-l-2 border-gray-400">
                                                    <h2>{p.title}</h2>
                                                    <h3>{p.year}</h3>
                                                    <ul className="list-disc pl-8">
                                                        {
                                                            p.achievements.map((a,index)=>(
                                                                <li
                                                                    className=""
                                                                    key={index}
                                                                >
                                                                    {a}
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    {/*<div className="pt-[5px] min-w-[300px]">*/}
                                    {/*    <Link*/}
                                    {/*        className="border-black border-dashed border-b cursor-pointer"*/}
                                    {/*        href={experience.companyLink}*/}
                                    {/*        title={experience.company}*/}
                                    {/*    >*/}
                                    {/*        {experience.company}*/}
                                    {/*    </Link>*/}
                                    {/*</div>*/}
                                    {/*<div className="flex flex-col gap-2 text-left">*/}
                                    {/*    <ul className="text-[14px]">*/}
                                    {/*        <li className="text-2xl">{experience.title}</li>*/}
                                    {/*        <li>{experience.year}</li>*/}
                                    {/*        <li>{experience.location}</li>*/}
                                    {/*    </ul>*/}
                                    {/*    <ul className="list-disc list-outside pl-3 text-[14px]">*/}
                                    {/*        {experience.achievements.map((a, index) => (*/}
                                    {/*            <li className="py-1" key={`${a} - ${index}`}>{a}</li>*/}
                                    {/*        ))}*/}
                                    {/*    </ul>*/}
                                    {/*</div>*/}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Experience;
