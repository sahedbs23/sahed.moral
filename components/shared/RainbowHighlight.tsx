import React from "react";
import { RoughNotation } from "react-rough-notation";
import RainbowHighlightInterface from "@/interfaces/RainbowHighlightInterface";

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
