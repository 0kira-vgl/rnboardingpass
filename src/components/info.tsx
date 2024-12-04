import { View, Text } from "react-native";

type FlightProps = {
  label: string;
  value: string;
};

export function Info({ label, value }: FlightProps) {
  return (
    <View className="items-center">
      <Text className="text-GRAY-400 text-sm uppercase">{label}</Text>
      <Text className="text-black text-base font-medium">{value}</Text>
    </View>
  );
}
