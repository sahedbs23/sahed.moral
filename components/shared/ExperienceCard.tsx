import React from "react";
import ExperienceInterface from "@/interfaces/ExperienceInterface";

const ExperienceCard: React.FC<ExperienceInterface> = experience => (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
        <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800">
            {experience.year}
        </h1>
        <h1 className="font-semibold text-xl">{experience.title}</h1>
        <a href={experience.companyLink} className="text-gray-500">
            {experience.company}
        </a>
        <p className="text-gray-600 dark:text-gray-400 my-2">{experience.achievements}</p>
    </div>
);
export default ExperienceCard;