import React, { useState } from "react";
import { ImageBackground, TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { Button } from "react-native";
import { FitbudLogoIcon } from "../../icons/fitbudLogoIcon";
import { WelcometoLogoIcon } from "../../icons/welcometoLogoIcon";
import fitbudbg from "../../../../assets/images/fitbudbg.png";
import { FIREBASE_AUTH } from "../../../../FireBaseConfig";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  backgroundImageStyle: {
    ...StyleSheet.absoluteFillObject,
  },
  welcomeToLogoStyle: {
    marginRight: 20,
    marginBottom: -5,
  },
  fitbudLogoStyle: {
    marginBottom: 50,
  },

  loginSquareButtonStyle: {
    width: 190,
    height: 47,
    borderRadius: 13,
    backgroundColor: "#0085FF",
    marginBottom: 160,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 15,
    marginTop: 14,
  },
});

function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const auth = FIREBASE_AUTH;
  return (
    <View style={styles.container}>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <ImageBackground style={styles.backgroundImageStyle} source={fitbudbg} />
      <View>
        <WelcometoLogoIcon style={styles.welcomeToLogoStyle} />
      </View>
      <View style={styles.fitbudLogoStyle}>
        <FitbudLogoIcon />
      </View>
      <TextInput
        value={username}
        style={{
          width: 190,
          height: 47,
          borderRadius: 13,
          backgroundColor: "white",
          marginBottom: 15,
          textAlign: "center",
        }}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        secureTextEntry={true}
        value={password}
        style={{
          width: 190,
          height: 47,
          borderRadius: 13,
          backgroundColor: "white",
          marginBottom: 15,
          textAlign: "center",
        }}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        secureTextEntry={true}
        value={confirmPassword}
        style={{
          width: 190,
          height: 47,
          borderRadius: 13,
          backgroundColor: "white",
          marginBottom: 15,
          textAlign: "center",
        }}
        placeholder="Confirm Password"
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View style={styles.loginSquareButtonStyle}>
          <Text style={styles.textStyle}>Register</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default RegisterScreen;
