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
            <div className="text-left pt-8 text-[16px] leading-[24px] font-normal text-black">
                <h1 className="pl-4 pb-2 uppercase">
                    <span className="border-dashed border-b border-black">Experiences</span>
                </h1>
                {/*<div className="text-xl italic p-[20px]">*/}
                {/*    <p>*/}
                {/*        /!* eslint-disable-next-line react/no-unescaped-entities *!/*/}
                {/*        "Through eight years of web-based software development, my journey has been a compelling narrative of stories and struggles, each chapter contributing to my growth as a software engineer."*/}
                {/*    </p>*/}
                {/*</div>*/}

                <div className="">
                    <ul className="list-none flex flex-col gap-5 p-4 pt-0">
                        {
                            experiences.map((experience,i) => (
                                <li className="text-left" key={experience.company}
                                >
                                    <h2>
                                        <Link className="hover:border-black hover:border-b hover:border-solid text-[18px] hover:text-[#0a66c2]" href={experience.companyLink}>
                                            {experience.company}
                                        </Link>
                                    </h2>
                                    <h3 className="text-[16px]">{experience.location}</h3>
                                    <ul className="pb-4">
                                        {
                                            experience.positions.map(p => (
                                                <li key={p.year} className="pb-4 last:pb-0">
                                                    <h2 className="text-[16px] text-[#00000099]">{p.title}</h2>
                                                    <h3 className="text-[16px] text-[#00000099]">{p.year}</h3>
                                                    <ul className="list-disc pl-8">
                                                        {
                                                            p.achievements.map((a,index)=>(
                                                                <li key={index}>{a}</li>
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
                                    <div className="w-[94%] mx-auto">
                                        {
                                            i!=3 && <hr/>
                                        }
                                    </div>
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
