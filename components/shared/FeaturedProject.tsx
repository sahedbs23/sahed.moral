import React from "react";
import Image from "next/image";


type FeaturedProjectProps = {
    imageSrc: string,
    children: React.JSX.Element,
    alt?: string,
    cssClass?:string
};

const FeaturedProject:React.FC<FeaturedProjectProps> = (props) => (
    <div className="flex flex-col md:flex-row gap-5 items-center justify-center px-5 md:p-5">
        <div className="md:w-1/2 w-full">
            <a href="https://www.123rf.com" className="w-full h-full">
                <Image
                    className={ `p-3 rounded bg-white ` + props.cssClass}
                    src={props.imageSrc}
                    alt={props.alt || ""}
                    height={244}
                    width={478}
                />
            </a>
        </div>
        <div className="w-full md:w-1/2 text-left px-3">
            {props.children}
        </div>
    </div>
)
export default FeaturedProject;