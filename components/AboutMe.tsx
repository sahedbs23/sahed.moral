import React from "react";
import Image from "next/image";

const AboutMe = () => {
    return (
        <>
            <section className="px-2 py-0 flex flex-col justify-center items-center text-center">
                    <Image
                        className="inline-flex object-cover border-4 border-black-600 dark:border-black-400 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-black-600/100 dark:shadow-black-700/100 bg-black-50 dark:bg-black-900 text-black-600 dark:text-black-400 h-24 w-24 !h-48 !w-48"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080"
                        height="184"
                        width="184"
                        alt="Wendell Adriel"/>
                </section>
            <section className="w-full md:w-1/2 flex flex-col gap-2 justify-center m-auto font-normal mt-[10px] mb-0 px-[30px] py-0  text-[#333] leading-[22px] text-[16px]">
                <h1>
                    Hello, my name is Sahed Moral.
                </h1>
                <p>
                    I hail from Dhaka, Bangladesh, where I spent my early years,
                    received my education at Baghoon High School and Kaligonj Sramik College,
                    and later pursued my Bachelor degree in Computer Science and Engineering at Dhaka International University.
                </p>
                <p>
                    I have a deep curiosity for a wide range of subjects, although formal education hasn't always been my strong suit.
                    My passion lies in computers and technology, with a particular fondness for computer programming.
                    Lately, I've developed a keen interest in cars.
                </p>
                <p>
                    Spending time with my friends is something I cherish. In the past, I used to frequent Koratkol University, which I considered the ultimate hangout spot. Unfortunately, I can no longer do so since I relocated from Bangladesh.
                </p>
                <p>
                    Currently, I'm employed as a remote senior web application developer at Inmagine Lab. Additionally, I serve as an administrator for phpXperts, Bangladesh's largest developer community.
                </p>
                <p>
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
