import React from "react";
import Image from "next/image";
import PageIntro from "@/components/shared/PageIntro";

const Recommendation = () => {

    const testimonials = [
        {
            name: 'Janne Lohne',
            imageUrl: 'https://s3.tebi.io/sahed/Janne-Lohne-min.jpeg',
            alt: 'Janne Lohne - Manged me directly at RS LMS',
            position: 'Project Manager at Gture',
            recommendation: `I had the pleasure of working closely with Sahed Moral at our RS LMS project and I highly recommend him.
             Sahed is a talented software engineer with impressive technical expertise and a strong ability to work effectively within a team.
             During our time together, Sahed consistently demonstrated a good understanding of software engineering principles and showed proficiency in various programming languages and frameworks.
             He were able to tackle complex projects with ease and deliver high-quality results. I have no doubt that he would be a valuable asset to any software engineering team. His technical expertise, collaborative approach, and strong work ethic makes him a great professional.`
        },
        {
            name: 'Abdur Rakib',
            imageUrl: 'https://s3.tebi.io/sahed/Abdur-Rakib-COO-PH-min.jpeg',
            alt: 'Abdur Rakib - Manged me directly at Brain Station 23 Ltd.',
            position: 'COO at Programing Hero',
            recommendation: `I had the pleasure of working closely with Sahed bhai for over 2 years on various local and international projects.
             Sahed bhai is an exceptional Frontend Developer specializing in React. His technical prowess, leadership abilities, and friendly communication made him an invaluable asset to our team. He consistently went above and beyond, especially during team crises, showing unwavering dedication to project success. 
            I highly recommend him for any organization in need of a talented and committed Frontend Developer who excels in both technical expertise and teamwork.`
        },
        {
            name: 'Anowar Hossain',
            imageUrl: 'https://s3.tebi.io/sahed/Anowar-Hosstain-PE-BS23-min.jpeg',
            alt: 'Anowar Hossain - Manged me directly at Brain Station 23',
            position: 'Principal Engineer at Brain Station 23',
            recommendation: `Sahed is a person with great skills and a master of Moodle. His result-driven technical skills and contributions make our team more meaningful and stronger.
             He is ready to deal with difficult situations and solve problems on time.
             I would like to think everything I learned about Moodle I learned from Sahed and then we build a moodle team :).
             Through the years, we worked on various projects at BS23 and I was impressed by his manner of doing a great job.
             I highly recommend him!`
        }
    ];

    return (
        <div className="flex flex-col md:flex-row gap-10 md:flex-wrap">
            {
                testimonials.map(testimonial => (
                    <div key={testimonial.name} className="w-full md:w-1/2">
                        <figure className="max-w-4xl mx-auto text-center">
                            <svg className="w-4 h-4 mx-auto mb-3 text-black-400 dark:text-black-600"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 18 14">
                                <path
                                    d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                            </svg>
                            <blockquote>
                                <p className="text-[16px] italic">
                                    {testimonial.recommendation}
                                </p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                <Image src={testimonial.imageUrl}
                                       alt={testimonial.alt}
                                       width="34" height="24"
                                       className="w-6 h-6 rounded-full"/>
                                <div
                                    className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                    <cite
                                        className="pr-3 text-[14px] font-medium text-gray-900 dark:text-black">{testimonial.name}</cite>
                                    <cite
                                        className="pl-3 text-sm text-black-500 dark:text-black-400">{testimonial.position}</cite>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                ))
            }
        </div>

    )
}
export default Recommendation;

const RecCom = () => (
    <section id="recommendations" className="bg-white pt-24 pb-16 px-0">
        <div className="max-w-7xl m-auto w-[92%]">
            <div className="flex flex-col w-full gap-8 justify-items-center items-center">
                <PageIntro
                    heading="Recommendations"
                    description="Here you will find testimonials from my previous managers regarding my performance and capabilities."
                />
                <Recommendation />
            </div>
        </div>
    </section>
);
