import "@/styles/global.css";
import { StatusBar } from "react-native";
import { Home } from "@/app/home";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}
