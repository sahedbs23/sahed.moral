import React from "react";

interface ListItemInterface {
    headline: string
    skills: string[]
}

const TechnologyLists: React.FC<ListItemInterface> = (props) => (
    <>
        <h4 className="text-2xl text-left font-bold text-black">{props.headline}</h4>
        <ul className="list-none flex flex-row gap-3 w-auto flex-wrap text-[14px] font-bold">
            {
                props.skills.map(skill => (
                    <li className="px-5 py-2 text-[#666] rounded bg-[#dedede]" key={skill}>{skill}</li>
                ))
            }
        </ul>
    </>
)
export default TechnologyLists;