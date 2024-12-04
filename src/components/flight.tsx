import { View, Text } from "react-native";

type FlightProps = {
  label: string;
  value: string;
};

export function Flight({ label, value }: FlightProps) {
  return (
    <View className="items-center">
      <Text className="text-GRAY-400 text-sm uppercase mb-1.5">{label}</Text>
      <Text className="text-black text-5xl font-bold">{value}</Text>
    </View>
  );
}
