import React from "react";
import Image from "next/image";
{/* eslint-disable-next-line react/no-unescaped-entities */}

const AboutMe = () => {
    return (
        <>
            <section className="px-2 py-0 flex flex-col justify-center items-center text-center mt-8">
                <Image
                    className="inline-flex object-cover rounded-full bg-black-50 dark:bg-black-900 text-black-600 dark:text-black-400"
                    src="https://s3.tebi.io/sahed/SahedMoral.jpeg"
                    height="184"
                    width="184"
                    priority
                    alt="Sahed Moral"/>
            </section>
            <section
                className="w-full md:w-1/2 flex flex-col gap-2 justify-center m-auto font-normal mt-[10px] mb-0 px-[30px] py-0  text-[#333] leading-[22px] text-[16px]">
                <h1>
                    Hello, my name is Sahed Moral.
                </h1>
                <p>
                    I hail from Dhaka, Bangladesh, where I spent my early years,
                    received my education at Baghoon High School and Kaligonj Sramik College,
                    and later pursued my Bachelor degree in Computer Science and Engineering at Dhaka International
                    University.
                </p>
                <p>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    I have a deep curiosity for a wide range of subjects, although formal education hasn't always been
                    my strong suit.
                    My passion lies in computers and technology, with a particular fondness for computer programming.
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Lately, I've developed a keen interest in cars.
                </p>
                <p>
                    Playing Cricket with my friends is something I cherish. In the past, I used to play as a pace bowler.
                </p>
                <p>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Currently, I'm employed as a remote senior web application developer at Inmagine Lab. Additionally,
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    I serve as an administrator for phpXperts, Bangladesh's largest developer community.
                </p>
                <p>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Lately, I've developed a newfound passion for cooking, and I'm excited to share my recipes here.
                </p>
                <p>
                    I wear my Bangladeshi 🇧🇩 identity with great pride.
                </p>
            </section>
        </>
    );
}

export default AboutMe;
