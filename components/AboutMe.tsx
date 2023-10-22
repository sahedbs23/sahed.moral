import React from "react";
import Bio from "@/dataSource/data/bio";
import Link from "next/link";
import PageIntro from "@/components/shared/PageIntro";
import TechnologyLists from "@/components/shared/TechnologyLists";

const AboutMe = () => {
    const skills = [
        'PHP', 'JavaScript', 'JAVA', 'SQL',
        'Laravel', 'React', 'Redux','Next.JS',
        'MySQL', 'postgreSQL', 'DynamoDB',
        'Amazon Web Service', 'CI/CD', 'GIT', 'GitHub',
        'HTML', 'CSS', 'SCSS', 'NPM',
        'Composer', 'Webpack', 'PHPUnit'
    ];
    return (
        <>
            <section className="text-white bg-center relative h-screen min-h-[700px] max-h-[900px] md:max-h-[600px] hero-section">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-[90rem]">
                   {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h2 className="uppercase text-center text-[#333] tracking-[3px] font-[800] text-4xl">Hey, I'm Sahed Moral</h2>
                   <div className="max-w-4xl mx-auto mt-12 mb-0">
                       <p className="w-full text-black text-xl text-center">
                           {Bio.description}
                       </p>
                       <div className="mt-12 text-center">
                           <Link href='/projects' className="btn btn--bg"> projects</Link>
                       </div>
                   </div>
               </div>
            </section>

            <section id="about" className="bg-[#fafafa] pt-24 pb-16 px-0">
                <div className="max-w-[120rem] m-auto w-[92%]">
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
                                    <p>I'm a Full Stack Developer building the backend and front-end of web applications that leads intricate business needs into seamless digital solutions. Check out some of my work in the Projects section.</p>
                                    <p>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming</p>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                                </div>
                                {/*<div className="mt-12">*/}
                                {/*    <Link href='/contact' className="btn btn--bg">Contact</Link>*/}
                                {/*</div>*/}
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col gap-10">
                                <TechnologyLists headline="My Skills" skills={skills}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;
