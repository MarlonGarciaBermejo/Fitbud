import React from "react";
import { View, Text, Button, ImageBackground, StyleSheet } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import Done from "../../../../assets/images/done.png";

const styles = StyleSheet.create({
  textStyle1: {
    color: "yellow",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 30,
  },
  viewStyle: {
    marginTop: 60,
    marginBottom: 470,
  },
  logoBGStyle: {
    backgroundColor: "yellow",
    borderRadius: 20,
    width: 150,
    height: 60,
    padding: 10,
    left: 140,
    marginBottom: 70,
  },
  image: {
    justifyContent: "center",
  },
});

const CompletionScreen = ({ onFinish }) => {
  return (
    <View>
      <ImageBackground source={Done} style={styles.image} resizeMode="contain">
        <ConfettiCannon count={200} origin={{ x: -10, y: 100 }} fallSpeed={3000} fadeOut={true} />
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle1}>Congratulations, you completed your workout!</Text>
        </View>
        <View style={styles.logoBGStyle}>
          <Button
            title="Continue"
            color="black"
            onPress={() => {
              onFinish();
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default CompletionScreen;
