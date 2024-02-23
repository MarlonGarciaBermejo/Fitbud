import React, { useState } from "react";
import { ImageBackground, TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { Button } from "react-native";
import { FitbudLogoIcon } from "../../icons/fitbudLogoIcon";
import { WelcometoLogoIcon } from "../../icons/welcometoLogoIcon";
import fitbudbg from "../../../../assets/images/fitbudbg.png";
import { FIREBASE_AUTH } from "../../../../FireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const auth = FIREBASE_AUTH;
  async function confirmPasswordMatch() {
    if (password === confirmPassword) {
      return true;
    } else {
      alert("Passwords do not match");
      return false;
    }
  }
  async function signUp() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Successfully signed up");
      return true;
    } catch (error) {
      alert("Failed to sign up: " + error.message);
      return false;
    }
  }
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
        value={email}
        autoCapitalize="none"
        style={{
          width: 190,
          height: 47,
          borderRadius: 13,
          backgroundColor: "white",
          marginBottom: 15,
          textAlign: "center",
        }}
        placeholder="Username"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        secureTextEntry={true}
        value={password}
        autoCapitalize="none"
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
        autoCapitalize="none"
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
      <TouchableOpacity
        onPress={async () => {
          const passwordMatch = await confirmPasswordMatch();
          const success = await signUp();
          if (success ?? passwordMatch) {
            navigation.navigate("Home");
          }
        }}
      >
        <View style={styles.loginSquareButtonStyle}>
          <Text style={styles.textStyle}>Register</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default RegisterScreen;
