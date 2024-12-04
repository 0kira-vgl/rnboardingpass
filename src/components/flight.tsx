import { View, Text } from "react-native";

type FlightProps = {
  label: string;
  value: string;
};

export function Flight({ label, value }: FlightProps) {
  return (
    <View className="items-center">
      <Text className="text-GRAY-400 text-xs uppercase mb-2">{label}</Text>
      <Text className="text-black text-5xl font-bold">{value}</Text>
    </View>
  );
}
