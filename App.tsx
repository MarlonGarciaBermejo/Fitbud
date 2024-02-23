import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import fitbudbg from "./assets/images/fitbudbg.png";
import { ImageBackground } from "react-native";
import { FitbudLogoIcon } from "./components/src/icons/fitbudLogoIcon";
import { WelcometoLogoIcon } from "./components/src/icons/welcometoLogoIcon";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import packageJson from "./package.json";
import LoginScreen from "./components/src/screens/LoginScreen";
import RegisterScreen from "./components/src/screens/RegisterScreen";
import StartScreen from "./components/src/screens/StartScreen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 200,
  },
  backgroundImageStyle: {
    ...StyleSheet.absoluteFillObject,
  },
  welcomeToLogoStyle: {
    marginRight: 20,
    marginBottom: -5,
  },
  fitbudLogoStyle: {
    marginBottom: 150,
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
  versionText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 14,
    marginTop: 20,
  },
  marginStyle: {
    marginTop: 240,
  },
});

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImageStyle} source={fitbudbg} />
      <View>
        <WelcometoLogoIcon style={styles.welcomeToLogoStyle} />
      </View>
      <View style={styles.fitbudLogoStyle}>
        <FitbudLogoIcon />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <View style={styles.loginSquareButtonStyle}>
            <Text style={styles.textStyle}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <View style={styles.loginSquareButtonStyle}>
          <Text style={styles.textStyle}>Register</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.marginStyle}>
        <Text style={styles.versionText}>Version: {packageJson.version}</Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTransparent: true,
            headerTintColor: "transparent",
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTransparent: true,
            headerTintColor: "transparent",
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerTransparent: true,
            headerTintColor: "transparent",
          }}
        />
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{
            headerTransparent: true,
            headerTintColor: "transparent",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
