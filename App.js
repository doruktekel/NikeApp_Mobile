import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { store } from "./src/store";
import { Provider } from "react-redux";
import Navigation from "./src/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <StatusBar style="auto" />
    </Provider>
  );
}
