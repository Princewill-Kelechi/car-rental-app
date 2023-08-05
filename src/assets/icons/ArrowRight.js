import React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../theme/colors";

const ArrowRight = ({ color = colors.veryDarkBlue, size = 24, ...props }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M9 6L15 12L9 18"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowRight;
