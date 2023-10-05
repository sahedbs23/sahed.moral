import React from "react";


type FeaturedProjectProps = {
    imageSrc: string,
    children: React.JSX.Element,
    alt?: string,
};

const FeaturedProject:React.FC<FeaturedProjectProps> = (props) => (
    <div className="flex flex-row gap-5 mx-32 items-center justify-center">
        <div className="w-1/2">
            <a href="https://www.123rf.com">
                <img className="w-full h-full p-[10px] rounded bg-white"  src={props.imageSrc} alt={props.alt}/>
            </a>
        </div>
        <div className="w-1/2 text-left">
            {props.children}
        </div>
    </div>
)
export default FeaturedProject;