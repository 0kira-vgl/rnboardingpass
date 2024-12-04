import { View } from "react-native";
import Svg, { Circle, Line } from "react-native-svg";

export function SvgLine() {
  return (
    <View>
      <Svg height={20} width="100%">
        <Line
          x1="0%"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="#A1A1AA"
          strokeWidth={1}
          strokeDasharray="5,5"
        />

        <Circle r={8} cx="0%" cy="50%" fill="#000" />
        <Circle r={8} cx="100%" cy="50%" fill="#000" />
      </Svg>
    </View>
  );
}
