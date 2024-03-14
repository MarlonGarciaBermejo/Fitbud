import React, { useState, useEffect } from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import redBG from "../../../../assets/images/red.png";
import { StyleSheet } from "react-native";
import UpperBodyEasyExercises from "../../molecules/UpperBodyCardItemEasy/index";
import CompletionScreen from "../../screens/CompletionScreen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImageStyle: {
    ...StyleSheet.absoluteFillObject,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 40,
    paddingTop: 150,
  },
  textStyle1: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 30,
    paddingTop: 150,
  },
  lastSeconds: {
    color: "red",
  },
  logoBGStyle: {
    backgroundColor: "yellow",
    borderRadius: 20,
    width: 150,
    height: 60,
    marginTop: 250,
    padding: 10,
  },
});

const Timer = ({ duration, onTimeUp, resetTimer }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration, resetTimer]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === 0) {
          clearInterval(interval);
          onTimeUp();
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [duration, onTimeUp, resetTimer]);

  return <Text style={[styles.textStyle1, timeLeft <= 3 && styles.lastSeconds]}>{timeLeft} seconds left</Text>;
};

const UpperBodyEasyScreen = () => {
  const exercises = UpperBodyEasyExercises;
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [resetTimer, setResetTimer] = useState(false);
  const [showCompletionScreen, setShowCompletionScreen] = useState(false);

  const handleFinish = () => {
    setShowCompletionScreen(false);
  };

  const goToNextExercise = () => {
    if (currentExerciseIndex === exercises.length - 1) {
      setShowCompletionScreen(true);
    } else {
      setCurrentExerciseIndex((prevIndex) => prevIndex + 1);
      setResetTimer(true);
    }
  };

  const goToPreviousExercise = () => {
    setCurrentExerciseIndex((prevIndex) => (prevIndex === 0 ? exercises.length - 1 : prevIndex - 1));
    setResetTimer(true);
  };

  useEffect(() => {
    if (resetTimer) {
      setTimeout(() => {
        setResetTimer(false);
      }, 100);
    }
  }, [resetTimer]);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImageStyle} source={redBG}>
        {showCompletionScreen ? (
          <CompletionScreen onFinish={handleFinish} />
        ) : (
          <View>
            <Text style={styles.textStyle}>{exercises[currentExerciseIndex]}</Text>
            <Timer duration={30} onTimeUp={goToNextExercise} resetTimer={resetTimer} />
          </View>
        )}
        {!showCompletionScreen && (
          <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 30 }}>
            <View style={styles.logoBGStyle}>
              <Button
                title="Previous"
                color="black"
                onPress={() => {
                  goToPreviousExercise();
                  setResetTimer(true);
                }}
              />
            </View>
            <View style={styles.logoBGStyle}>
              <Button
                title="Next"
                color="black"
                onPress={() => {
                  goToNextExercise();
                  setResetTimer(true);
                }}
              />
            </View>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default UpperBodyEasyScreen;
