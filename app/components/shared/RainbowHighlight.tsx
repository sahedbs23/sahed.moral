import React from "react";
import { RoughNotation } from "react-rough-notation";
interface RainbowHighlightInterface {
  color: string,
  animationDuration?:number,
  children:React.ReactNode
}

const RainbowHighlight:React.FC<RainbowHighlightInterface> = ({ color, children,animationDuration=30 }) => {
  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};

export default RainbowHighlight;
