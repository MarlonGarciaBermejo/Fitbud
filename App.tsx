import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import fitbudbg from "./assets/images/fitbudbg.png";
import { ImageBackground } from "react-native";
import { FitbudLogoIcon } from "./components/src/icons/fitbudLogoIcon";
import { WelcometoLogoIcon } from "./components/src/icons/welcometoLogoIcon";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImageStyle: {
    ...StyleSheet.absoluteFillObject,
  },
  welcomeToLogoStyle: {
    marginRight: 20,
    marginBottom: -5,
  },
  fitbudLogoStyle: {
    marginBottom: 300,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImageStyle} source={fitbudbg} />
      <View>
        <WelcometoLogoIcon style={styles.welcomeToLogoStyle} />
      </View>
      <View style={styles.fitbudLogoStyle}>
        <FitbudLogoIcon />
      </View>
    </View>
  );
}
