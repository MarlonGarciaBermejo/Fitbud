import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import blueBG from "../../../../assets/images/blue.png";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    alignItems: "center",
  },
  textStyle: {
    textAlign: "center",
    marginTop: 300,
    color: "black",
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

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Profile</Text>
    </View>
  );
}

export default ProfileScreen;
