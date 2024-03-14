import React, { useState, useEffect } from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import blueBG from "../../../../assets/images/blue.png";
import { StyleSheet } from "react-native";
import LowerBodyHardExercises from "../../molecules/LowerBodyCardItemHard/index";
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

const UpperBodyEasyScreen = ({ navigation }) => {
  const exercises = LowerBodyHardExercises;
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [resetTimer, setResetTimer] = useState(false);
  const [showCompletionScreen, setShowCompletionScreen] = useState(false);
  const [showGetReady, setShowGetReady] = useState(true); // New state variable

  const handleFinish = () => {
    navigation.navigate("Start");
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

  useEffect(() => {
    if (showGetReady) {
      let countdown = 5;
      const interval = setInterval(() => {
        countdown--;
        if (countdown === 0) {
          setShowGetReady(false);
          clearInterval(interval);
        }
      }, 1000);
    }
  }, [showGetReady]);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImageStyle} source={blueBG}>
        {showGetReady ? (
          <View>
            <Text style={styles.textStyle}>Get ready</Text>
            <Timer duration={5} onTimeUp={() => setShowGetReady(false)} resetTimer={resetTimer} />
          </View>
        ) : showCompletionScreen ? (
          <CompletionScreen onFinish={handleFinish} />
        ) : (
          <View>
            <Text style={styles.textStyle}>{exercises[currentExerciseIndex]}</Text>
            <Timer duration={30} onTimeUp={goToNextExercise} resetTimer={resetTimer} />
          </View>
        )}
        {!showCompletionScreen && !showGetReady && (
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
