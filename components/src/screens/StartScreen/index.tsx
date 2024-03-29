import React, { useEffect, useState } from "react";
import { View, ImageBackground, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import headerImage from "../../../../assets/images/Headerimg.png";
import { WelcomeSmallIcon } from "../../icons/welcomeSmallIcon";
import { FitBudSmallIcon } from "../../icons/fitBudSmallIcon";
import { ScrollView } from "react-native-gesture-handler";
import squareIconBlue from "../../../../assets/images/squareIconBlue.png";
import squareIconRed from "../../../../assets/images/squareIconRed.png";
import squareIconYellow from "../../../../assets/images/squareIconYellow.png";
import { LowerBodyIcon } from "../../icons/lowerBodyIcon";
import { UpperBodyIcon } from "../../icons/upperBodyIcon";
import { CoreIcon } from "../../icons/coreIcon";
import { FIREBASE_AUTH } from "../../../../FireBaseConfig";
import Swiper from "react-native-swiper";
import whiteImage from "../../../../assets/images/whiteImage.png";
import { TextIcon } from "../../icons/textIcon";
import { TrainingIcon } from "../../icons/trainingIcon";
import { HelpIcon } from "../../icons/helpIcon";
import { FeedbackIcon } from "../../icons/feedbackIcon";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    alignItems: "center",
  },
  headerImageStyle: {
    width: "100%",
    height: "100%",
  },
  welcomeStyle: {
    marginLeft: 25,
    marginBottom: -25,
  },
  fitbudStyle: {
    marginLeft: 40,
    marginBottom: 20,
  },
  chooseStyle: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 24,
    marginTop: 20,
    marginLeft: 100,
  },
  categoryStyle: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 26,
    marginRight: 12,
  },
  viewStyle2: {
    backgroundColor: "#2F2F2F",
    width: 380,
    height: 140,
    marginTop: 10,
    borderRadius: 15,
  },
  categoryTextStyle: {
    color: "white",
    textAlign: "center",
    fontWeight: "400",
    fontSize: 18,
    paddingTop: 30,
  },
  squareIconBlueStyle: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginLeft: 25,
  },
  squareIconRedStyle: {
    width: 100,
    height: 100,
    marginTop: -100,
    marginLeft: 142,
  },
  squareIconYellowStyle: {
    width: 100,
    height: 100,
    marginTop: -100,
    marginLeft: 259,
  },
  lowerBodyIconStyle: {
    width: 100,
    height: 150,
    marginTop: 20,
    marginLeft: 15,
  },
  categoryTextStyle1: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 15,
    marginBottom: -20,
    marginTop: 5,
  },
  bodyTextStyle: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 17,
    paddingTop: 20,
    marginLeft: 130,
  },
  bodyTextStyle1: {
    color: "#0085FF",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 18,
    paddingTop: 19,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
    paddingTop: 10,
    padding: 20,
  },
  welcomeUserStyle: {
    marginTop: 20,
    marginLeft: 10,
    padding: 15,
    backgroundColor: "#202020",
  },
  viewStyle3: {
    backgroundColor: "#2F2F2F",
    width: 380,
    height: 300,
    marginTop: 20,
    borderRadius: 15,
    padding: 10,
  },
  backIconStyle: {
    marginTop: 80,
    marginLeft: 20,
  },
  feedbackStyle: {
    marginTop: 20,
    marginLeft: 20,
  },
  swiperStyle: {
    height: 195,
  },
  chooseStyle1: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 24,
    marginTop: 60,
    marginLeft: 10,
  },
  categoryStyle1: {
    color: "#0085FF",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 35,
    marginRight: 20,
  },
  chooseStyle2: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 24,
    marginTop: 20,
    marginLeft: 100,
  },
  categoryStyle2: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 26,
    marginRight: 12,
  },
  textIconStyle: {
    marginTop: 60,
    marginLeft: 40,
  },
  trainingStyle: {
    bottom: 50,
    marginLeft: 20,
    width: 300,
    height: 200,
  },
  textStyle2: {
    color: "black",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
    marginTop: 20,
  },
  helpiconStyle: {
    marginTop: 19,
    marginLeft: 40,
  },
  textStyle3: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
    marginTop: 3.5,
    marginLeft: 40,
  },
  textStyle4: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
    marginTop: 5,
    marginLeft: 30,
    marginRight: 10,
  },
});

function StartScreen({ navigation }) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = FIREBASE_AUTH.currentUser;
    if (user) {
      setEmail(user.email);
    }
  }, []);
  return (
    <ScrollView style={{ backgroundColor: "#202020" }}>
      <View style={styles.welcomeUserStyle}>
        <Text style={{ fontWeight: "500", fontSize: 15, color: "grey" }}>Welcome back,</Text>
        <Text style={{ fontWeight: "600", fontSize: 18, color: "white" }}>{email}</Text>
      </View>
      <View style={styles.container}>
        <Swiper
          style={styles.swiperStyle}
          autoplay={true}
          autoplayTimeout={5}
          showsPagination={true}
          dotStyle={{ backgroundColor: "rgba(0,0,0,.2)", width: 8, height: 8, top: 20 }}
          activeDotStyle={{ backgroundColor: "white", width: 8, height: 8, top: 20 }}
        >
          <ImageBackground source={headerImage} style={styles.headerImageStyle} resizeMode="contain">
            <View style={styles.welcomeStyle}>
              <WelcomeSmallIcon />
            </View>
            <View style={styles.fitbudStyle}>
              <FitBudSmallIcon />
            </View>
            <Text style={styles.chooseStyle}>Choose your workout</Text>
            <Text style={styles.categoryStyle}>Category</Text>
          </ImageBackground>
          <ImageBackground source={whiteImage} style={styles.headerImageStyle} resizeMode="contain">
            <View style={styles.welcomeStyle}></View>
            <View style={styles.fitbudStyle}></View>
            <TextIcon style={styles.textIconStyle} />
            <Text style={styles.categoryStyle1}>Best</Text>
          </ImageBackground>
          <View>
            <TrainingIcon style={styles.trainingStyle} />
          </View>
        </Swiper>
        <Text style={styles.categoryTextStyle}>Categories</Text>
        <View style={styles.viewStyle2}>
          <TouchableOpacity onPress={() => navigation.navigate("LowerBodyDifficulty")}>
            <ImageBackground source={squareIconBlue} style={styles.squareIconBlueStyle}>
              <Text style={styles.categoryTextStyle1}>LowerBody</Text>
              <LowerBodyIcon style={styles.lowerBodyIconStyle} />
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("UpperBodyDifficulty")}>
            <ImageBackground source={squareIconRed} style={styles.squareIconRedStyle}>
              <Text style={styles.categoryTextStyle1}>UpperBody</Text>
              <UpperBodyIcon style={styles.lowerBodyIconStyle} />
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("CoreDifficulty")}>
            <ImageBackground source={squareIconYellow} style={styles.squareIconYellowStyle}>
              <Text style={styles.categoryTextStyle1}>Core</Text>
              <CoreIcon style={styles.lowerBodyIconStyle} />
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.viewStyle3}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.bodyTextStyle}>What is </Text>
            <Text style={styles.bodyTextStyle1}>Fitbud? </Text>
          </View>
          <Text style={styles.textStyle}>
            {"Fitbud is designed to provide users with a comprehensive Tabata workout experience on their mobile devices." +
              "Utilizing the Tabata training method, users can engage in high-intensity interval training (HIIT) workouts" +
              "to enhance their fitness levels, burn calories, and improve overall health.\n\n The app offers various workouts" +
              "with different difficulty levels to cater to users of all fitness levels."}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Feedback")}>
              <FeedbackIcon style={styles.feedbackStyle} />
            </TouchableOpacity>
            <Text style={styles.textStyle4}>Feedback</Text>
          </View>
        </View>
      </View>
      <View style={{ height: 60 }}></View>
    </ScrollView>
  );
}

export default StartScreen;
