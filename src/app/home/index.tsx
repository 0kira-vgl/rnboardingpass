import { Flight } from "@/components/flight";
import { ImageBackground, Text, View } from "react-native";

export function Home() {
  return (
    <View className="items-center flex-1 w-full bg-black">
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

      <View className="bg-zinc-50 flex-1 w-full rounded-[22] overflow-hidden pb-6">
        <View>
          <View>
            <Flight label="São Paulo" value="GRU" />
            <Flight label="New York" value="JKF" />
          </View>
        </View>
      </View>
    </View>
  );
}
