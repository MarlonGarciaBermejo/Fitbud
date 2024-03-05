import React from "react";
import { View, ImageBackground, TouchableOpacity, Button } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import yellowBG from "../../../../assets/images/yellow.png";

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
  textStyle: {
    textAlign: "center",
    marginTop: 300,
    color: "white",
    fontSize: 20,
  },
});

function CoreHardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgStyle} source={yellowBG} />
      <View>
        <Text style={styles.textStyle}>Hard</Text>
      </View>
    </View>
  );
}

export default CoreHardScreen;
