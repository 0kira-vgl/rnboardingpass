import { ImageBackground, Text } from "react-native";

export function Header() {
  return (
    <ImageBackground
      className="w-full flex-1 items-center justify-center"
      source={require("@/assets/cover.png")}
    >
      <Text className="text-zinc-50 text-2xl font-extrabold">
        Cartão de embarque
      </Text>
      <Text className="text-GRAY-300 text-sm font-medium">
        Faltam 45 dias para sua viagem
      </Text>
    </ImageBackground>
  );
}
