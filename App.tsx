import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import fitbudbg from "./assets/images/fitbudbg.png";
import { ImageBackground } from "react-native";
import { FitbudLogoIcon } from "./components/src/icons/fitbudLogoIcon";
import { WelcometoLogoIcon } from "./components/src/icons/welcometoLogoIcon";
import { HomeIcon } from "./components/src/icons/homeIcon";
import { ProfileIcon } from "./components/src/icons/profileIcon";
import { LogoutIcon } from "./components/src/icons/logoutIcon";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import packageJson from "./package.json";
import LoginScreen from "./components/src/screens/LoginScreen";
import RegisterScreen from "./components/src/screens/RegisterScreen";
import StartScreen from "./components/src/screens/StartScreen";
import UpperBodyDifficultyScreen from "./components/src/screens/UpperBodyDifficultyScreen";
import LowerBodyDifficultyScreen from "./components/src/screens/LowerBodyDifficultyScreen";
import CoreDifficultyScreen from "./components/src/screens/CoreDifficultyScreen";
import { FIREBASE_AUTH } from "./FireBaseConfig";
import ProfileScreen from "./components/src/screens/ProfileScreen";
import UpperBodyEasyScreen from "./components/src/screens/UpperBodyEasyScreen";
import UpperBodyHardScreen from "./components/src/screens/UpperBodyHardScreen";
import LowerBodyEasyScreen from "./components/src/screens/LowerBodyEasyScreen";
import LowerBodyHardScreen from "./components/src/screens/LowerBodyHardScreen";
import CoreEasyScreen from "./components/src/screens/CoreEasyScreen";
import CoreHardScreen from "./components/src/screens/CoreHardScreen";
import CompletionScreen from "./components/src/screens/CompletionScreen";

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
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View style={styles.loginSquareButtonStyle}>
          <Text style={styles.textStyle}>Login</Text>
        </View>
      </TouchableOpacity>
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
          name="Completion"
          component={CompletionScreen}
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
          name="UpperBodyEasy"
          component={UpperBodyEasyScreen}
          options={{
            headerStyle: {
              backgroundColor: "#A20000",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "600",
            },
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="UpperBodyHard"
          component={UpperBodyHardScreen}
          options={{
            headerStyle: {
              backgroundColor: "#A20000",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "600",
            },
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="LowerBodyEasy"
          component={LowerBodyEasyScreen}
          options={{
            headerStyle: {
              backgroundColor: "#006ACD",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "600",
            },
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="LowerBodyHard"
          component={LowerBodyHardScreen}
          options={{
            headerStyle: {
              backgroundColor: "#006ACD",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "600",
            },
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="CoreEasy"
          component={CoreEasyScreen}
          options={{
            headerStyle: {
              backgroundColor: "#CA6D00",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "600",
            },
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="CoreHard"
          component={CoreHardScreen}
          options={{
            headerStyle: {
              backgroundColor: "#CA6D00",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "600",
            },
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "#051E35",
            },
            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "600",
            },
            headerBackTitleVisible: false,
            headerLeft: () => (
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Start");
                  }}
                >
                  <HomeIcon style={{ marginLeft: 50 }} />
                </TouchableOpacity>
              </View>
            ),
            headerTitle: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Profile");
                }}
              >
                <ProfileIcon style={{ marginBottom: 5 }} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  FIREBASE_AUTH.signOut()
                    .then(() => {
                      navigation.reset({
                        index: 0,
                        routes: [{ name: "Login" }],
                      });
                    })
                    .catch((error) => {
                      console.error(error);
                    });
                }}
              >
                <LogoutIcon style={{ marginRight: 70 }} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "#051E35",
            },
            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "600",
            },
            headerBackTitleVisible: false,
            headerLeft: () => (
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Start");
                  }}
                >
                  <HomeIcon style={{ marginLeft: 50 }} />
                </TouchableOpacity>
              </View>
            ),
            headerTitle: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Profile");
                }}
              >
                <ProfileIcon style={{ marginBottom: 5 }} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  FIREBASE_AUTH.signOut()
                    .then(() => {
                      navigation.reset({
                        index: 0,
                        routes: [{ name: "Login" }],
                      });
                    })
                    .catch((error) => {
                      console.error(error);
                    });
                }}
              >
                <LogoutIcon style={{ marginRight: 70 }} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="UpperBodyDifficulty"
          component={UpperBodyDifficultyScreen}
          options={{
            headerStyle: {
              backgroundColor: "#A20000",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "600",
            },
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="LowerBodyDifficulty"
          component={LowerBodyDifficultyScreen}
          options={{
            headerStyle: {
              backgroundColor: "#006ACD",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "600",
            },
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="CoreDifficulty"
          component={CoreDifficultyScreen}
          options={{
            headerStyle: {
              backgroundColor: "#CA6D00",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "600",
            },
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
