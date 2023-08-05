// import React from "react";
// import { Svg, Path } from "react-native-svg";
// import { colors } from "../../theme/colors";

// const ArrowBack = ({
//   height = "1024",
//   viewBox = "0 0 1024 1024",
//   width = "1024",
//   fill = colors.veryDarkBlue,
// }) => {
//   return (
//     <Svg width={width} height={height} viewBox={viewBox}>
//       <Path
//         d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
//         fill={fill}
//       />
//     </Svg>
//   );
// };

// export default ArrowBack;

// import * as React from 'react';
// import Svg, {Path} from 'react-native-svg';

// const ArrowBack = () => (
//   <Svg width={16} height={12} fill="none">
//     <Path
//       d="m10 12-1.4-1.45L12.15 7H0V5h12.15L8.6 1.45 10 0l6 6-6 6Z"
//       fill="#4F4F4F"
//     />
//   </Svg>
// );

// export default ArrowBack;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../theme/colors";

const ArrowBack = ({
  height = "1024",
  viewBox = "0 0 1024 1024",
  width = "1024",
  fill = colors.veryDarkBlue,
}) => (
  <Svg width={width} height={height} fill="none">
    <Path
      d="M7.443 16.603.42 9.58a1.33 1.33 0 0 1-.324-.496A1.678 1.678 0 0 1 0 8.511c0-.203.032-.394.096-.572a1.33 1.33 0 0 1 .324-.496L7.443.42C7.723.14 8.079 0 8.51 0c.433 0 .79.14 1.07.42.279.28.419.636.419 1.069 0 .432-.14.788-.42 1.068L3.626 8.511l5.954 5.955c.28.28.42.636.42 1.068 0 .433-.14.79-.42 1.07-.28.279-.636.419-1.069.419-.432 0-.788-.14-1.068-.42Z"
      fill={fill}
    />
  </Svg>
);

export default ArrowBack;
