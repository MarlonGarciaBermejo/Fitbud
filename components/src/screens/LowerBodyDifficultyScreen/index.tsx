import React from "react";
import { View, ImageBackground, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import blueBG from "../../../../assets/images/blue.png";
import { BackIcon } from "../../icons/backIcon";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    alignItems: "center",
  },
  textStyle: {
    textAlign: "center",
    marginTop: 300,
    color: "white",
    fontSize: 20,
  },
  bgStyle: {
    ...StyleSheet.absoluteFillObject,
  },
  backIconStyle: {
    marginTop: 80,
    marginRight: 360,
  },
});

function LowerBodyDifficultyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgStyle} source={blueBG} />
      <TouchableOpacity onPress={() => navigation.navigate("Start")}>
        <BackIcon style={styles.backIconStyle} />
      </TouchableOpacity>
      <Text style={styles.textStyle}>Welcome</Text>
    </View>
  );
}

export default LowerBodyDifficultyScreen;
