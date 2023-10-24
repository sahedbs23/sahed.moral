"use clients";

import React from "react";
import Bio from "@/dataSource/data/bio";
import Link from "next/link";
import dynamic from 'next/dynamic'
import PageIntro from "@/components/shared/PageIntro";
import TechnologyLists from "@/components/shared/TechnologyLists";

const Recommendation = dynamic(() => import('@/components/shared/Recommendation'))


const AboutMe = () => {
    const skills = [
        'PHP', 'JavaScript', 'MySQL',
        'Laravel', 'React', 'Redux',
        'Amazon Web Service',
        'HTML', 'CSS', 'SCSS',
    ];

    const otherSkills = [
        'Symfony', 'NextJS', 'VueJS',
        'JAVA', 'postgresSQL', 'Oracle', 'MariaDB', 'DynamoDB',
        'CI/CD', 'GIT',
        'Composer', 'Webpack', 'PHPUnit',
        'Bootstrap', 'Tailwind'
    ];


    return (
        <>
            <section
                className="text-white bg-center relative h-screen min-h-[700px] max-h-[900px] md:max-h-[600px] hero-section">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-[90rem]">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h2 className="uppercase text-center text-[#333] tracking-[3px] font-[800] text-4xl">Hey, I'm Sahed
                        Moral</h2>
                    <div className="max-w-4xl mx-auto mt-12 mb-0">
                        <p className="w-full text-black text-xl text-center">
                            {Bio.description}
                        </p>
                        <div className="mt-12 text-center">
                            <Link href='/#about' className="btn btn--bg"> About Me</Link>
                        </div>

                    </div>
                </div>
                <div className="scrollbar absolute lg:bottom-[5%] md:bottom-[4%] bottom-[3%] left-[50%]">
                    <div className="mouse">
                    </div>
                </div>
            </section>
            <section id="about" className="bg-[#fafafa] pt-24 pb-16 px-0">
                <div className="max-w-7xl m-auto w-[92%]">
                    <div className="flex flex-col w-full gap-32 justify-items-center items-center">
                        <PageIntro
                            heading="About Me"
                            description="Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"
                        />

                        <div className="flex flex-col md:flex-row gap-10 w-full text-[#666]">
                            <div className="w-full md:w-1/2 flex flex-col gap-10">
                                <h4 className="text-2xl font-bold text-black">Get to know me!</h4>
                                <div className=" flex flex-col gap-5 text-[16px]">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <p>I'm a passionate Full-Stack developer crafting the backend and front-end of web
                                        applications, transforming complex business requirements into elegant digital
                                        solutions.</p>
                                    <p>I also like sharing content related to the stuff that I have learned over the
                                        years in Web Development so it can help other people of the Dev Community. Feel
                                        free to Connect or Follow me on my Linkedin where I post useful content related
                                        to Web Development and Programming</p>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        a good opportunity that matches my skills and experience then don't hesitate to
                                        contact me.</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col gap-10">
                                <TechnologyLists headline="My Core Skills" skills={skills}/>
                                <TechnologyLists headline="Other Skills" skills={otherSkills}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;
