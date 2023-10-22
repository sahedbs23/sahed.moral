import React from "react";

type introProps = {
    heading: string,
    description: string
}
const PageIntro:React.FC<introProps> = (props) => {
  return (
      <div className="flex flex-col justify-items-center items-center text-center max-w-4xl">
          <h2 className="text-2xl font-bold relative mb-16">
              <span className="about-me">{props.heading}</span>
          </h2>
          <p className="text-xl text-[#555] m-auto">
              {props.description}
          </p>
      </div>
  )
}

export default PageIntro;