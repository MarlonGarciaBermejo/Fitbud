import React from "react";
import { Button, ImageBackground, TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import fitbudbg from "../../../../assets/images/fitbudbg.png";
import { FitbudLogoIcon } from "../../icons/fitbudLogoIcon";
import { WelcometoLogoIcon } from "../../icons/welcometoLogoIcon";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 100,
  },
  backgroundImageStyle: {
    ...StyleSheet.absoluteFillObject,
  },
  welcomeToLogoStyle: {
    marginRight: 20,
    marginBottom: -5,
  },
  fitbudLogoStyle: {
    marginBottom: 80,
  },
  loginSquareButtonStyle: {
    width: 190,
    height: 47,
    borderRadius: 13,
    backgroundColor: "#0085FF",
    marginBottom: 15,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 15,
    marginTop: 14,
  },
  backButtonContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: "white",
  },
});

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
      <ImageBackground style={styles.backgroundImageStyle} source={fitbudbg} />
      <View>
        <WelcometoLogoIcon style={styles.welcomeToLogoStyle} />
      </View>
      <View style={styles.fitbudLogoStyle}>
        <FitbudLogoIcon />
      </View>
      <TextInput
        style={{
          width: 190,
          height: 47,
          borderRadius: 13,
          backgroundColor: "white",
          marginBottom: 15,
          textAlign: "center",
        }}
        placeholder="Username"
      />
      <TextInput
        style={{
          width: 190,
          height: 47,
          borderRadius: 13,
          backgroundColor: "white",
          marginBottom: 15,
          textAlign: "center",
        }}
        placeholder="Password"
      />

      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View style={styles.loginSquareButtonStyle}>
          <Text style={styles.textStyle}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;
