import React from "react";
import { View, ImageBackground, TouchableOpacity, Button } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import blueBG from "../../../../assets/images/blue.png";

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

function LowerBodyHardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgStyle} source={blueBG} />
      <View>
        <Text style={styles.textStyle}>Hard</Text>
      </View>
    </View>
  );
}

export default LowerBodyHardScreen;
