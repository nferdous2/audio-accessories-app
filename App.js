import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FlashMessage from "react-native-flash-message";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import Navigation from "./src/navigation/Index";
import store from "./src/store/Index";

export default function App() {

  let [fontsLoaded] = useFonts({
    "Manrope-Bold": require("./assets/fonts/Antonio-Bold.ttf"),
    "Manrope-Regular": require("./assets/fonts/Antonio-Regular.ttf"),
    "Manrope-Medium": require("./assets/fonts/Antonio-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
    
  } else {

    return (
      <Provider store={store}>
      
          <SafeAreaProvider>
         
          <SafeAreaView style={{flex:1}}>
          <Navigation/>
          </SafeAreaView>

            <StatusBar />

            <FlashMessage position="top" 
            floating 
            statusBarHeight={30} />

          </SafeAreaProvider>
          
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
