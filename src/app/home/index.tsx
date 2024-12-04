import { Flight } from "@/components/flight";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Info } from "@/components/info";
import QRCode from "react-native-qrcode-svg";
import { Header } from "@/components/header";
import { SvgLine } from "@/components/svgLine";

export function Home() {
  return (
    <View className="items-center flex-1 w-full bg-black">
      <Header />

      <View className="bg-zinc-50 w-full rounded-[22] overflow-hidden pb-6">
        <View className="p-5">
          <View className="flex-row justify-between items-center mb-12">
            <Flight label="São Paulo" value="GRU" />

            <View className="items-center">
              <Ionicons name="airplane-sharp" size={32} color="#000" />
              <Text className="text-GRAY-800 text-sm">9h 45min</Text>
            </View>

            <Flight label="New York" value="JKF" />
          </View>

          <Text className="color-GRAY-400 text-sm uppercase">Passageiro</Text>
          <Text className="color-black text-2xl font-bold">
            Matheus Tiburcio
          </Text>

          <View className="mt-12">
            <View className="flex-row w-full justify-between">
              <Info label="Data" value="12 de Dez." />
              <Info label="Embarque" value="17:25" />
            </View>
          </View>
        </View>

        <SvgLine />

        <View className="w-full p-5 flex-row gap-6">
          <View className="gap-6 flex-1">
            <View className="flex-row justify-between">
              <Info label="Voo" value="YZ 607" />
              <Info label="Assento" value="16G" />
            </View>

            <View className="flex-row justify-between">
              <Info label="Terminal" value="3" />
              <Info label="Portão" value="39" />
            </View>
          </View>

          <QRCode value="https://github.com/0kira-vgl" size={130} />
        </View>
      </View>
    </View>
  );
}
