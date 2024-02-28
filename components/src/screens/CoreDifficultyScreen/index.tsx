import React from "react";
import { View, ImageBackground, TouchableOpacity } from "react-native";
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
  backIconStyle: {
    marginTop: 80,
    marginRight: 360,
  },
});

function CoreDifficultyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgStyle} source={yellowBG} />
      <TouchableOpacity onPress={() => navigation.navigate("Start")}>
        <BackIcon style={styles.backIconStyle} />
      </TouchableOpacity>
      <Text style={{ color: "White" }}>Welcome</Text>
    </View>
  );
}

export default CoreDifficultyScreen;
