// import React, {useEffect, useState} from "react";
import experiences from "@/dataSource/data/experiences";
import Link from "next/link";

const Experience = () => {
    return (
        <section className="max-w-[768px] mx-auto">
            <div className="text-left pt-8 text-[16px] leading-[24px] font-normal text-black">
                <h1 className="pl-4 pb-2 uppercase">
                    <span className="border-dashed border-b border-black">Experiences</span>
                </h1>
                <div className="">
                    <ul className="list-none flex flex-col gap-5 p-4 pt-0">
                        {
                            experiences.map((experience,i) => (
                                <li className="text-left" key={experience.company}
                                >
                                    <h2>
                                        <Link className="hover:border-black hover:border-b hover:border-solid text-[18px] text-[#0a66c2]" href={experience.companyLink}>
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
                                    <div className="w-[98%] mx-auto">
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
