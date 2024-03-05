import React from "react";
import { View, ImageBackground, TouchableOpacity, Button } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import yellowBG from "../../../../assets/images/yellow.png";
import { BackIcon } from "../../icons/backIcon";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    alignItems: "center",
  },
  headerImageStyle: {
    width: 390,
    height: 200,
  },
  bgStyle: {
    ...StyleSheet.absoluteFillObject,
  },
  textStyle: {
    textAlign: "center",
    marginTop: 250,
    color: "white",
    fontSize: 24,
  },
  textStyle1: {
    textAlign: "center",
    marginTop: 40,
    color: "white",
    fontSize: 24,
  },
  logoBGStyle: {
    backgroundColor: "yellow",
    borderRadius: 20,
    width: 140,
    height: 50,
    marginTop: 20,
    padding: 5,
  },
});

function CoreDifficultyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgStyle} source={yellowBG} />

      <Text style={styles.textStyle}>Easy</Text>
      <View style={styles.logoBGStyle}>
        <Button title="Start" color="black" onPress={() => navigation.navigate("CoreEasy")} />
      </View>
      <Text style={styles.textStyle1}>Hard</Text>
      <View style={styles.logoBGStyle}>
        <Button title="Start" color="black" onPress={() => navigation.navigate("CoreHard")} />
      </View>
    </View>
  );
}

export default CoreDifficultyScreen;
